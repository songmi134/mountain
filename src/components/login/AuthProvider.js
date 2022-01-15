import React, { useEffect, useState } from "react";
import { auth } from "../../auth/firebaseAuth";
import RegisterForm from "./RegisterForm";
import { defaultHeaders } from "../../config/clientConfig";
import { axiosInstance } from "../../config/axiosConfig";
import axios from 'axios';

export const UserContext = React.createContext( null );
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //const [token, setToken] = useState(null);
  const [registerFormOpen, setRegisterFormOpen] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if(firebaseUser) {
        const token = await firebaseUser.getIdToken();
        defaultHeaders.Authorization = `Bearer ${token}`;
        localStorage.setItem('token', "Bearer "+await firebaseUser.getIdToken());
        //console.log("12Bearer "+await firebaseUser.getIdToken());
        /*
        const res = await axios.get("/users/me", {
            headers: defaultHeaders
        });
        */
        console.log(1);
        //const res = await axiosInstance.get("https://moutain.herokuapp.com/users/me");
        const res = await axiosInstance.get("/users/me", {
          headers: defaultHeaders
        });
        console.log(2);
        if(res.status === 200) {
          console.log(3);
          const user = await res;
          setUser(user);
          console.log(user);
        } else if (res.status === 401) {
          const data = await res;
          if(data.code === "USER_NOT_FOUND") {
            setRegisterFormOpen(true);
          } 
        } 
      } else {
        delete defaultHeaders.Authorizations;
        setUser(null);
      } 
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {(registerFormOpen) ? 
        (<RegisterForm setRegisterFormOpen={setRegisterFormOpen} />) :
        (children)
      }
    </UserContext.Provider>
  );
};

export default AuthProvider;
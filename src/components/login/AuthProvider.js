import React, { useEffect, useState } from "react";
import { auth } from "../../auth/firebaseAuth";
import RegisterForm from "./RegisterForm";
import { defaultHeaders } from "../../config/clientConfig";
import axios from 'axios';

export const UserContext = React.createContext( null );
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerFormOpen, setRegisterFormOpen] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if(firebaseUser) {
        const token = await firebaseUser.getIdToken();
        defaultHeaders.Authorization = `Bearer ${token}`;
        //console.log(token);
        
        const res = await axios.get("/users/me", {
            headers: defaultHeaders
        });
        
       /*
        const res = await fetch("https://moutain.herokuapp.com/users/me", {
          mode: 'no-cors',
          method: "GET",
          headers: defaultHeaders,
        });
        */
        console.log(res);
        console.log(res.status);
        if(res.status === 200) {
          const user = await res;
          setUser(user);
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
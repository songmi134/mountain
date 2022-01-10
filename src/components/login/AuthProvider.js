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
        console.log(token);
        //https://cors-anywhere.herokuapp.com/
        /*
        const res = await axios.get("https://moutain.herokuapp.com/users/me", {
            headers: defaultHeaders
        });
        */
        const res = await fetch("https://moutain.herokuapp.com/users/me", {
          mode: 'no-cors',
          method: "GET",
          headers: defaultHeaders,
        });
        
        console.log(res);
        console.log('1 : '+res.json());
        if(res.status === 200) {
          console.log('2 : ');
          const user = await res.json();
          setUser(user);
        } else if (res.status === 401) {
          console.log('3 : ');
          const data = await res.json();
          if(data.code === "USER_NOT_FOUND") {
            console.log('4 : ');
            setRegisterFormOpen(true);
          } 
        } 
      } else {
        console.log('5 : ');
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
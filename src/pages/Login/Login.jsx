import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../components/login/AuthProvider';
import { signInGoogle, signOut } from '../../auth/firebaseAuth';
import '../../index.css';


const Login = () => {
  const { user }  = useContext(UserContext);

  return (
    
      <div>
        {user ? ( <div className='main'> <p>{user.nickname} <br/> {user.email} </p> </div> ) : 
          ( <div className='main'> <p>Sign in With Google</p> </div> )}
        {user ? (  <button className='signin' onClick={signOut}>Sign Out</button> ) : 
          ( 
          <button className='signin' onClick={signInGoogle}>Sign in With Google</button> )}
      </div>
      
  );
}

export default Login;
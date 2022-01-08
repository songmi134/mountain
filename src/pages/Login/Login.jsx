import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../components/login/AuthProvider';
import { signInGoogle, signOut } from '../../auth/firebaseAuth';
import '../../index.css';
import firebase from "firebase";
import 'firebase/auth';

//var firebaseui = require('firebaseui');

const Login = () => {
  const { user }  = useContext(UserContext);
/*
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/login',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
  };

  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);
*/
  return (
      <>
      <div>
        {user ? ( <div className='main'> <p>{user.nickname} <br/> {user.email} </p> </div> ) : 
          ( <div className='main'> <p>로그인을 해주세요</p> </div> )}
        {user ? (  <button className='signin' onClick={signOut}>Sign Out</button> ) : 
          ( 
          <button className='signin' onClick={signInGoogle}>Sign in With Google</button> )}
      </div>
      <div className='common__form__join'>
        계정이 없으십니까?{' '}
        <Link to={'/register'}>
          회원가입
        </Link>
      </div>
    </>
  );
}

export default Login;
//1. 중복된 코드가 원인이 될 수 있다
//2. 초기화 코드들을 한 곳에 모아두는 것이 좋다
//3. 컴포넌트에 초기화 코드가 있다면, 계속 실행되는 문제가 될 수 있다
import firebase from "firebase";
import "firebase/auth";
import firebaseKey from "../config/firebaseKey.json";

firebaseKey.apiKey = process.env.REACT_APP_KEY;
let firebaseui = require("firebaseui");
firebase.initializeApp(firebaseKey);

export const auth = firebase.auth();

export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

export const signOut = () => {
  console.log("signOut");
  return auth.signOut();
};

// Initialize the FirebaseUI Widget using Firebase.
export let ui = new firebaseui.auth.AuthUI(firebase.auth());

export let uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "/login",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

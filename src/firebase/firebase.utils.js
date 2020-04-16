import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const linkedUpGoogleWithFire = {
    apiKey: "AIzaSyBBqzX-iIEhy3DmTJSsN0tfeSBd509U-OQ",
    authDomain: "hipster-gen-style.firebaseapp.com",
    databaseURL: "https://hipster-gen-style.firebaseio.com",
    projectId: "hipster-gen-style",
    storageBucket: "hipster-gen-style.appspot.com",
    messagingSenderId: "1095982146055",
    appId: "1:1095982146055:web:7eb52a71d50fbb598440a2",
    measurementId: "G-YKW0KMK6SJ"
  };

  firebase.initializeApp(linkedUpGoogleWithFire);

  export const auth = firebase.auth();
  // I imported firebase/auth, because this fire.auth method on FireBase. Its Export because if we wanted to use this again related to Authentication

  export const firestore = firebase.firestore();
   

  const provider = new firebase.auth.GoogleAuthProvider();
  // this gives us access to the new provider class from the .auth liberly.
  provider.setCustomParameters({ prompt: "select_account" });
  // this scope means it will always trigger the Google Popup whenever used google auth provider for authentication and signin.
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;




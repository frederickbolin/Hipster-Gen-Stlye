import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBBqzX-iIEhy3DmTJSsN0tfeSBd509U-OQ",
  authDomain: "hipster-gen-style.firebaseapp.com",
  databaseURL: "https://hipster-gen-style.firebaseio.com",
  projectId: "hipster-gen-style",
  storageBucket: "hipster-gen-style.appspot.com",
  messagingSenderId: "1095982146055",
  appId: "1:1095982146055:web:7eb52a71d50fbb598440a2",
  measurementId: "G-YKW0KMK6SJ"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;





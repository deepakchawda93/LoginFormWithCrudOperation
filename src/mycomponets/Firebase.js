import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD5AIx0hNoEFmJl4IPK71DZM0R2Pzt2VsE",
  authDomain: "crud-opration-30a26.firebaseapp.com",
  projectId: "crud-opration-30a26",
  storageBucket: "crud-opration-30a26.appspot.com",
  messagingSenderId: "595255736731",
  appId: "1:595255736731:web:df1ddc77d2e121ad9a093e",
  measurementId: "G-HKF6JWK988",
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
//  export const db = firebase.firestore()

const provider = new GoogleAuthProvider();
export const Firebase = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res);
      const googleData = {
        displayName: res.user.displayName,
        email: res.user.email,
        photoURL: res.user.photoURL,
      };
      const json = JSON.stringify(googleData);
      localStorage.setItem("data", json);
    })
    .catch((error) => {
      console.log(error);
    });
};

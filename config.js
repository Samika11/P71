import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-NiWTCbU5-U8Xl5HpD0WDYLBiRfv1F0Y",
  authDomain: "project-71-64cfc.firebaseapp.com",
  projectId: "project-71-64cfc",
  storageBucket: "project-71-64cfc.appspot.com",
  messagingSenderId: "189594232994",
  appId: "1:189594232994:web:92da1ad64f19f9b66e0ffb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();



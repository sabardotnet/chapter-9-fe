// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default firebase.initializeApp( {
  apiKey: "AIzaSyC4wmUerhVyyJ_htfsyefnJIVXgktHE_4c",
  authDomain: "chapter9-kelompok2.firebaseapp.com",
  projectId: "chapter9-kelompok2",
  storageBucket: "chapter9-kelompok2.appspot.com",
  messagingSenderId: "173036665577",
  appId: "1:173036665577:web:5cff1522e6d5b505dace78",
  measurementId: "G-F37BJYTZ9S"
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
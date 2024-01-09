// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-989ad.firebaseapp.com",
  projectId: "mern-auth-989ad",
  storageBucket: "mern-auth-989ad.appspot.com",
  messagingSenderId: "883689056138",
  appId: "1:883689056138:web:c8a6373c15cb2cc306ca73",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
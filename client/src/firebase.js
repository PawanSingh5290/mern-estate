// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-de0c8.firebaseapp.com",
  projectId: "mern-estate-de0c8",
  storageBucket: "mern-estate-de0c8.appspot.com",
  messagingSenderId: "914745605358",
  appId: "1:914745605358:web:8cab4e2852f731874307ff"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
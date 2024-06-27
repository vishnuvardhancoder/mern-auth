// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-auth-330fa.firebaseapp.com",
  projectId: "mern-auth-330fa",
  storageBucket: "mern-auth-330fa.appspot.com",
  messagingSenderId: "212773219403",
  appId: "1:212773219403:web:7e40ac75af2691f45571ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "auralis-web.firebaseapp.com",
  projectId: "auralis-web",
  storageBucket: "auralis-web.firebasestorage.app",
  messagingSenderId: "996689673081",
  appId: "1:996689673081:web:bdf9f0d963adf5e9af4da8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

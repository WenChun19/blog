// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next-blog-b84db.firebaseapp.com",
  projectId: "next-blog-b84db",
  storageBucket: "next-blog-b84db.appspot.com",
  messagingSenderId: "202828323158",
  appId: "1:202828323158:web:8e044d6eeab32ac3d89ef7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

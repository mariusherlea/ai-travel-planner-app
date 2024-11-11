// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC1THFxDb9ZyHcejiBcV54zKxzvllrKXA",
  authDomain: "travel-planner-161fc.firebaseapp.com",
  projectId: "travel-planner-161fc",
  storageBucket: "travel-planner-161fc.firebasestorage.app",
  messagingSenderId: "727268785265",
  appId: "1:727268785265:web:46b3bc0efcee9c1b8fafd0",
  measurementId: "G-7WVTB8M8L4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

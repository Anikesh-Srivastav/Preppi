// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8V2q0L8TcdFFt4geDSKA2YN6KnXqCoEA",
  authDomain: "preppi-1.firebaseapp.com",
  projectId: "preppi-1",
  storageBucket: "preppi-1.firebasestorage.app",
  messagingSenderId: "426177571287",
  appId: "1:426177571287:web:518246188f518246178392",
  measurementId: "G-Z7XZFWNWP8"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
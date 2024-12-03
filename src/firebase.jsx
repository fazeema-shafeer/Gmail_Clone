// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
//import { getDatabase } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyBFom1RX3rjR0hdTxld-0WMUyuxqs2NXtY",
  authDomain: "clone-6a8ba.firebaseapp.com",
  projectId: "clone-6a8ba",
  storageBucket: "clone-6a8ba.firebasestorage.app",
  messagingSenderId: "165239209795",
  appId: "1:165239209795:web:139146ce21adc6e5a4b9f6",
  measurementId: "G-YP2LDLL5ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
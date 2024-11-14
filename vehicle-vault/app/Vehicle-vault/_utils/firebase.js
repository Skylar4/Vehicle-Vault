// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj4pcMdXk4M-mQ3lfVdYamiBY0XDcYd60",
  authDomain: "vehicle-vault-49253.firebaseapp.com",
  projectId: "vehicle-vault-49253",
  storageBucket: "vehicle-vault-49253.firebasestorage.app",
  messagingSenderId: "227799452471",
  appId: "1:227799452471:web:d49c209d674abe60eaa8b2",
  measurementId: "G-RQ3JLJ68DC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


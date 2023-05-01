// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJsL2UoW-aDniQk9D5Sfnq8KkW8c5QN-U",
  authDomain: "sneakify-c48c0.firebaseapp.com",
  projectId: "sneakify-c48c0",
  storageBucket: "sneakify-c48c0.appspot.com",
  messagingSenderId: "72364891528",
  appId: "1:72364891528:web:2b5b1a912de9f3d7efae3d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }
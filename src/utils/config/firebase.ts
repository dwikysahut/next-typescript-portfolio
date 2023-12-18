// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx14TvBokKsA_79zQP1a3M5LuakXgomiA",
  authDomain: "chat-apps-7a738.firebaseapp.com",
  projectId: "chat-apps-7a738",
  storageBucket: "chat-apps-7a738.appspot.com",
  messagingSenderId: "233200089926",
  appId: "1:233200089926:web:95e47e4bf6156ee20a8347",
  measurementId: "G-BC14YQVL9N"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const dbNotesInstance = collection(db, 'messages');

export { db, firebaseApp, dbNotesInstance };

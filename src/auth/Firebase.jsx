// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyBNuhAcdyXYg2es4TS39kQHs0rDMTsxqa8",
  authDomain: "chat-app-20396.firebaseapp.com",
  projectId: "chat-app-20396",
  storageBucket: "chat-app-20396.appspot.com",
  messagingSenderId: "394532123650",
  appId: "1:394532123650:web:1a69625f364cb0b31ae31b",
  measurementId: "G-E6HBLQ6SPG"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const googleAuth = new GoogleAuthProvider()
const db = getFirestore(app)
 const auth = getAuth(app)
export { auth, googleAuth,signInWithRedirect,db };

























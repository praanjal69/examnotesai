
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "final-year-project-81fd0.firebaseapp.com",
  projectId: "final-year-project-81fd0",
  storageBucket: "final-year-project-81fd0.firebasestorage.app",
  messagingSenderId: "1099509608189",
  appId: "1:1099509608189:web:52f001e46874a9a0765894"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}
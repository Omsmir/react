// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {

  apiKey: "AIzaSyBd8nL0Yj2oj3WOW1XdcROFuYtJ_Njy0n0",

  authDomain: "cloud-6f659.firebaseapp.com",

  projectId: "cloud-6f659",

  storageBucket: "cloud-6f659.appspot.com",

  messagingSenderId: "655530516176",

  appId: "1:655530516176:web:d8bac161e070a1412788d5",

  measurementId: "G-JBHF6CX98T"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()

export const db  = getFirestore(app)
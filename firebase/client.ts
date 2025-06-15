// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClRuGingC_AYp1iBtRopGbCR7nLOjA57w",
  authDomain: "prepwise-eb4b7.firebaseapp.com",
  projectId: "prepwise-eb4b7",
  storageBucket: "prepwise-eb4b7.firebasestorage.app",
  messagingSenderId: "169551126928",
  appId: "1:169551126928:web:483f031bdfe201c0781315",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)
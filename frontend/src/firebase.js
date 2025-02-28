// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1zh9o2y7kiza91j8A6Ib1FNngRocC-74",
  authDomain: "studyzodiac.firebaseapp.com",
  projectId: "studyzodiac",
  storageBucket: "studyzodiac.firebasestorage.app",
  messagingSenderId: "823362295915",
  appId: "1:823362295915:web:8bb90caf4ba9b53062392e",
  measurementId: "G-4LR13WMSJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
const auth = getAuth(app);

export { auth };
export const db = getFirestore(app);
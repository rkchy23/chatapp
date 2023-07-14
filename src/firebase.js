import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVYqassCSoj5ydbGNqqE7IIKADFJdY_FY",
  authDomain: "chat-37d2e.firebaseapp.com",
  projectId: "chat-37d2e",
  storageBucket: "chat-37d2e.appspot.com",
  messagingSenderId: "472101934111",
  appId: "1:472101934111:web:b567ebc1c42b1937caf12a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

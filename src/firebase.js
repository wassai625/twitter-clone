// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuq1kiGZig3LOlUywSkgcvpETzDM1U5Ns",
  authDomain: "twitter-clone-udemy-976d7.firebaseapp.com",
  projectId: "twitter-clone-udemy-976d7",
  storageBucket: "twitter-clone-udemy-976d7.appspot.com",
  messagingSenderId: "199332062318",
  appId: "1:199332062318:web:b96033aae698c85156327f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
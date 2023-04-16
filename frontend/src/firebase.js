// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpWVrX1f6iXP3lvNvgBLzbFSkQYFvCQGw",
  authDomain: "quora-clone-12157.firebaseapp.com",
  projectId: "quora-clone-12157",
  storageBucket: "quora-clone-12157.appspot.com",
  messagingSenderId: "1092477431375",
  appId: "1:1092477431375:web:759a1b611b3ace2aed443a",
  measurementId: "G-QS831Q6NEW"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };

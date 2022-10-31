// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";


// Config Data
const firebaseConfig = {
  apiKey: "AIzaSyDXhGcjr2a_y3kMy7uRdXbDIGEuYLffVH0",
  authDomain: "tech-club-website-45e48.firebaseapp.com",
  projectId: "tech-club-website-45e48",
  storageBucket: "tech-club-website-45e48.appspot.com",
  messagingSenderId: "575934096633",
  appId: "1:575934096633:web:3f8ea3d0c0ded4adddee28",
  measurementId: "G-L63PZF8D6N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Authentication
const provider = new GoogleAuthProvider();

export const auth = getAuth(app)

export const googleSignIn = () => {
  signInWithRedirect(auth, provider);
}
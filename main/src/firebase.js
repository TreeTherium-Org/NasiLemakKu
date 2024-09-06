// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq6Cn43fISIMBN0Ca2mQUeaCYzY4UYkFw",
  authDomain: "nasilemakku-161c7.firebaseapp.com",
  projectId: "nasilemakku-161c7",
  storageBucket: "nasilemakku-161c7.appspot.com",
  messagingSenderId: "547804126906",
  appId: "1:547804126906:web:a3c1797d64837527a06c83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication + Firestore Database and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export { app }; // Export the app as default
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration wait for login team (Athiqah/Danial)
const firebaseConfig = {
  apiKey: "AIzaSyCq6Cn43fISIMBN0Ca2mQUeaCYzY4UYkFw",
  authDomain: "nasilemakku-161c7.firebaseapp.com",
  projectId: "nasilemakku-161c7",
  storageBucket: "Ynasilemakku-161c7.appspot.com",
  messagingSenderId: "547804126906",
  appId: "1:547804126906:web:a3c1797d64837527a06c83D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Auth
const auth = getAuth(app);

export { db, auth };

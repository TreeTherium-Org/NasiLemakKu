import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCq6Cn43fISIMBN0Ca2mQUeaCYzY4UYkFw",
  authDomain: "nasilemakku-161c7.firebaseapp.com",
  projectId: "nasilemakku-161c7",
  storageBucket: "nasilemakku-161c7.appspot.com",
  messagingSenderId: "547804126906",
  appId: "1:547804126906:web:a3c1797d64837527a06c83"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

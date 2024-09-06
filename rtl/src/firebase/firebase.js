import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCq6Cn43fISIMBN0Ca2mQUeaCYzY4UYkFw",
    authDomain: "nasilemakku-161c7.firebaseapp.com",
    projectId: "nasilemakku-161c7",
    storageBucket: "nasilemakku-161c7.appspot.com",
    messagingSenderId: "547804126906",
    appId: "1:547804126906:web:a3c1797d64837527a06c83"
  };


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };

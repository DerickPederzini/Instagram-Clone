import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDykm9n8BTWoQ_BprPHw84RWiTeLdjAbPg",
  authDomain: "insta-clone-4fde7.firebaseapp.com",
  projectId: "insta-clone-4fde7",
  storageBucket: "insta-clone-4fde7.appspot.com",
  messagingSenderId: "785577982246",
  appId: "1:785577982246:web:96a84745eabafc41aea9e7",
  measurementId: "G-9401YXJHCJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};

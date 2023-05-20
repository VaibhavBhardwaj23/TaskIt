import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAlC1FHdA4cmh10fTV3OhEAVOsbyNpMR5I",
  authDomain: "taskit-ee5a0.firebaseapp.com",
  projectId: "taskit-ee5a0",
  storageBucket: "taskit-ee5a0.appspot.com",
  messagingSenderId: "917511109097",
  appId: "1:917511109097:web:50d2d695c095292a573378",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

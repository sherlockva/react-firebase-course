import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCz9UaSGBNCYtD6kqx_HK2bmlN0k_YKNkI",
  authDomain: "friendly-chat-c54d0.firebaseapp.com",
  projectId: "friendly-chat-c54d0",
  storageBucket: "friendly-chat-c54d0.appspot.com",
  messagingSenderId: "953055271874",
  appId: "1:953055271874:web:66a3586b5dde6681c7945b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.DB_SECERT_KEY,
  authDomain: "dropzone-1af56.firebaseapp.com",
  projectId: "dropzone-1af56",
  storageBucket: "dropzone-1af56.appspot.com",
  messagingSenderId: "457747614733",
  appId: "1:457747614733:web:7d6b807fd65af33f49d944",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

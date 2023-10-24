import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBA4unfaUbcuaCuwhDIjx4EbThaCq3mjQw",
  authDomain: "slack-app-f387a.firebaseapp.com",
  projectId: "slack-app-f387a",
  storageBucket: "slack-app-f387a.appspot.com",
  messagingSenderId: "1081773283233",
  appId: "1:1081773283233:web:a0a32ac32c1f5c21649de0",
  measurementId: "G-0ZNDKGK1DZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export{ auth, provider, db};


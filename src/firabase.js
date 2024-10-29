
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDlaD8apgqFb2FyMDgm1u6dI_eag2xZXpU",
  authDomain: "finaly-project-cccd5.firebaseapp.com",
  projectId: "finaly-project-cccd5",
  storageBucket: "finaly-project-cccd5.appspot.com",
  messagingSenderId: "110563835350",
  appId: "1:110563835350:web:9ef5e367a103c16c127877",
  measurementId: "G-LJZL5XMY4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

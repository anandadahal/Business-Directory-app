// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWr9HRCLWiOyK8KQu-xacHWGbGf16c-G8",
  authDomain: "my-app-c813c.firebaseapp.com",
  projectId: "my-app-c813c",
  storageBucket: "my-app-c813c.appspot.com",
  messagingSenderId: "648974501507",
  appId: "1:648974501507:web:8d39e195e53762899e7db6",
  measurementId: "G-L8B722WNLS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db=getFirestore(app)
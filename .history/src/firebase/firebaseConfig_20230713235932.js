// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLSk1f1K6dPfkavJgb9mdon9PDEPSR80U",
  authDomain: "gatitos-7f5b2.firebaseapp.com",
  projectId: "gatitos-7f5b2",
  storageBucket: "gatitos-7f5b2.appspot.com",
  messagingSenderId: "577315722745",
  appId: "1:577315722745:web:28034b8baa1dc0c2115928",
  measurementId: "G-DZQ36RVP49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

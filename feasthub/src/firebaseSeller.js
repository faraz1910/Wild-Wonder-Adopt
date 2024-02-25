// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/  docs/web/setup#available-libraries

// Your web app's Firebase configuration
const secondaryFirebaseConfig = {
  apiKey: "AIzaSyDxmbq1ptn8ECySlYUrDcGu2bnUwWYGJKU",
  authDomain: "feasthub-seller.firebaseapp.com",
  projectId: "feasthub-seller",
  storageBucket: "feasthub-seller.appspot.com",
  messagingSenderId: "544938859146",
  appId: "1:544938859146:web:93834b4ca0c74c9bff2b73"
};

// Initialize Firebase
const secondaryApp = initializeApp(secondaryFirebaseConfig, "secondary");
export const secondaryAuth = getAuth(secondaryApp);
export const db = getFirestore(secondaryApp);
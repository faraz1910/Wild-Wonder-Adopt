import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsy-I1LAlEDLmF1g3LSiewa7q3N5Lodx4",
  authDomain: "feasthub-buyer.firebaseapp.com",
  projectId: "feasthub-buyer",
  storageBucket: "feasthub-buyer.appspot.com",
  messagingSenderId: "864311238938",
  appId: "1:864311238938:web:588d1ca71dca4abc5d0ca3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize firebase Authentication and get reference to the service
export const auth = getAuth(app);
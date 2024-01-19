import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxOOZcj-4ubyRUtJsdbSxU18MeedXroes",
  authDomain: "feasthub-dev.firebaseapp.com",
  projectId: "feasthub-dev",
  storageBucket: "feasthub-dev.appspot.com",
  messagingSenderId: "223621316895",
  appId: "1:223621316895:web:7ead5aca4cf97148fa302a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize firebase Authentication and get reference to the service
export const auth = getAuth(app);
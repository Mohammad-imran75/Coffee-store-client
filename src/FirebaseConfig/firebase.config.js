// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbvW9sSA91h1zJwQw730xPJNKz4kfZPbw",
  authDomain: "coffee-store-b3c66.firebaseapp.com",
  projectId: "coffee-store-b3c66",
  storageBucket: "coffee-store-b3c66.appspot.com",
  messagingSenderId: "775186732462",
  appId: "1:775186732462:web:6a67bd9c565ba54cc4643f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
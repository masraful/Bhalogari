// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBokKjCGA7rbaA8bOzudbnpRdFs6LRXHw8",
    authDomain: "products-resale-e2f14.firebaseapp.com",
    projectId: "products-resale-e2f14",
    storageBucket: "products-resale-e2f14.appspot.com",
    messagingSenderId: "52062318462",
    appId: "1:52062318462:web:3e38860c3f1b567c5ccd2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
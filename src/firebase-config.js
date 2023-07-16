// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAq2tDLiPIjOv9Gq00lAqbezzSyfyZX98U",
    authDomain: "food-ordering-site-dee12.firebaseapp.com",
    projectId: "food-ordering-site-dee12",
    storageBucket: "food-ordering-site-dee12.appspot.com",
    messagingSenderId: "2429315027",
    appId: "1:2429315027:web:3287458c07eb6ffa40f126",
    measurementId: "G-33PEGPWKPK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAx9kov8JOyEbxFO-GCZfqIXBLiyBQqmyE",
    authDomain: "automotores-sdg-proyecto-final.firebaseapp.com",
    projectId: "automotores-sdg-proyecto-final",
    storageBucket: "automotores-sdg-proyecto-final.appspot.com",
    messagingSenderId: "828509364838",
    appId: "1:828509364838:web:705dc6726be77e126803a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const Db = getFirestore(app);
export const analytics = getAnalytics(app);
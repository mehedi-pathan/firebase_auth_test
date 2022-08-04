// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDO8CnefzQc6G0XUbczLwUA3Ue6DPo8zA",
    authDomain: "auth-development-3950f.firebaseapp.com",
    projectId: "auth-development-3950f",
    storageBucket: "auth-development-3950f.appspot.com",
    messagingSenderId: "404542005275",
    appId: "1:404542005275:web:0dd93058655d03fc8358be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhnah9YbMk1Dk9o4by3dFPcg5Q2XOvOTQ",
  authDomain: "e-leve-app.firebaseapp.com",
  projectId: "e-leve-app",
  storageBucket: "e-leve-app.firebasestorage.app",
  messagingSenderId: "199079762900",
  appId: "1:199079762900:web:8a86354b863bcb27199441",
  measurementId: "G-ZWJE9Y5F29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

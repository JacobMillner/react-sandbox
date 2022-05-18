// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlTFctRWSL25sp8u_6otaFR9zTd5Z0f2o",
  authDomain: "react-firestore-83ac4.firebaseapp.com",
  projectId: "react-firestore-83ac4",
  storageBucket: "react-firestore-83ac4.appspot.com",
  messagingSenderId: "123292901923",
  appId: "1:123292901923:web:0273a51ae5ff1448228796",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBetuJOsd4ToVtJ_5GXLC7RaSHxRk2qXIo",
  authDomain: "superheroprojectdev.firebaseapp.com",
  projectId: "superheroprojectdev",
  storageBucket: "superheroprojectdev.appspot.com",
  messagingSenderId: "351815621832",
  appId: "1:351815621832:web:c938585fb873ca565b99fd",
  measurementId: "G-R4JYR9X466"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!');
    } else {
        console.log('no user');
    }
})
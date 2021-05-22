import firebase from "firebase/app";

// Optionally import the services that you want to use

import "firebase/auth";
import "firebase/firestore";
//import "firebase/database";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkWmoHUFcKKJpZeAH01dI_IrELm7PPEd4",
  authDomain: "signal-clone-671d4.firebaseapp.com",
  projectId: "signal-clone-671d4",
  storageBucket: "signal-clone-671d4.appspot.com",
  messagingSenderId: "341273285095",
  appId: "1:341273285095:web:59ec824b2a58822d19ed42",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

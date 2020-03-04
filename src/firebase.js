// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdcqIzRwtU_6WUClmsTyXKn-SG5rJdsRk",
    authDomain: "battleship-8ebd4.firebaseapp.com",
    databaseURL: "https://battleship-8ebd4.firebaseio.com",
    projectId: "battleship-8ebd4",
    storageBucket: "battleship-8ebd4.appspot.com",
    messagingSenderId: "917047792473",
    appId: "1:917047792473:web:2bfe8ec6e1b055eaceb248",
    measurementId: "G-HSNLLBB5SN"
  };

  firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

export {database};
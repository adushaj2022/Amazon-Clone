// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABKL_gPaNG7Xu0M_5QKriEOqtLYHJaBLQ",
  authDomain: "clone-7f310.firebaseapp.com",
  databaseURL: "https://clone-7f310-default-rtdb.firebaseio.com",
  projectId: "clone-7f310",
  storageBucket: "clone-7f310.appspot.com",
  messagingSenderId: "813711213570",
  appId: "1:813711213570:web:5d6aeb025e1637d3da531b",
  measurementId: "G-8FS9QREV55",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

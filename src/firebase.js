// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBz9YiPX4RK3hTS9EVB-1FlLt9rG8hCFEQ",
  authDomain: "clone-aa381.firebaseapp.com",
  databaseURL: "https://clone-aa381.firebaseio.com",
  projectId: "clone-aa381",
  storageBucket: "clone-aa381.appspot.com",
  messagingSenderId: "48431673175",
  appId: "1:48431673175:web:ce67e9b23d97ffd81b9812",
  measurementId: "G-LJH56RH6BX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRq0P6s7mpzySZN1gu4-USMVDFJSOB7R0",
  authDomain: "challenge-4b0fe.firebaseapp.com",
  projectId: "challenge-4b0fe",
  storageBucket: "challenge-4b0fe.appspot.com",
  messagingSenderId: "675120067880",
  appId: "1:675120067880:web:f825c87a616318d3118c1d",
  measurementId: "G-H7GDF0PJ8S"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};
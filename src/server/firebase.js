import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj1LU7UqpOq1hxtSwP5kT_RHF2A__t38A",
  authDomain: "collage-f83a7.firebaseapp.com",
  projectId: "collage-f83a7",
  storageBucket: "collage-f83a7.appspot.com",
  messagingSenderId: "951221177827",
  appId: "1:951221177827:web:e1dce135a0e9c3f36fa4d6",
  measurementId: "G-E495PNBQW8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
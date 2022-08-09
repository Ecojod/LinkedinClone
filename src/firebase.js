import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD5IINhYkYpRhiAeVir92gJFoaVzUSVYUs",
  authDomain: "linkedin-clone-799a8.firebaseapp.com",
  projectId: "linkedin-clone-799a8",
  storageBucket: "linkedin-clone-799a8.appspot.com",
  messagingSenderId: "304272952952",
  appId: "1:304272952952:web:680c070dc518408fa5678d",
  measurementId: "G-0R7Q0L0PN0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
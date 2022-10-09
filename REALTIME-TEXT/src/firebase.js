import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBI6QJB8CuYaQuLVFB4b1-k_RPLGzIJmqo",
    authDomain: "realtime-chatapp-cffa1.firebaseapp.com",
    projectId: "realtime-chatapp-cffa1",
    storageBucket: "realtime-chatapp-cffa1.appspot.com",
    messagingSenderId: "263884991663",
    appId: "1:263884991663:web:e9f7d03aebcdc655bff85a"
  };
  const app = initializeApp(firebaseConfig);

  export const auth= firebase.auth();
  export const googleProvider=new firebase.auth.GoogleAuthProvider();
  export const db= firebase.firestore();
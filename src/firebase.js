import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDjr8CpjS7Esv5Kl18_XZobF6EWFKBFJ0Y",
    authDomain: "reverr-app.firebaseapp.com",
    projectId: "reverr-app",
    storageBucket: "reverr-app.appspot.com",
    messagingSenderId: "269808787063",
    appId: "1:269808787063:web:0ece9f5a02fff232a9f072"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


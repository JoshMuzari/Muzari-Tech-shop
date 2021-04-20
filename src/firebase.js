 import firebase from 'firebase';
 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCPKwGiNT1Hojvl_I4v3aKIgJ2RoqfZfCg",
    authDomain: "tech-shop-14ea4.firebaseapp.com",
    projectId: "tech-shop-14ea4",
    storageBucket: "tech-shop-14ea4.appspot.com",
    messagingSenderId: "136273082546",
    appId: "1:136273082546:web:71f3041c72174e11d371ab",
    measurementId: "G-9TT0KP0E97"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
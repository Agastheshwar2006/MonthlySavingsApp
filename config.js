import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBnFzr4KBKrszegmu9hWI5slhI2FWD6OrA",
  authDomain: "monthly-savings-app.firebaseapp.com",
  projectId: "monthly-savings-app",
  storageBucket: "monthly-savings-app.appspot.com",
  messagingSenderId: "599293893666",
  appId: "1:599293893666:web:017ae9ff041ce065997e7b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
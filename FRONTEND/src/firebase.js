import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCZc3370fXyPf2DaLk2M4JUtiIk6LRQ9-Y",
  authDomain: "foodie-web-app-8ebd5.firebaseapp.com",
  projectId: "foodie-web-app-8ebd5",
  storageBucket: "foodie-web-app-8ebd5.appspot.com",
  messagingSenderId: "451449738471",
  appId: "1:451449738471:web:9526e21d32531f2612fe42",
  measurementId: "G-6GC3Y3YW8T"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};

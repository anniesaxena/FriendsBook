import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD4K9Cpd1VDGUyQTiJ7DdFNG96Qf8KoHjg",
    authDomain: "friendsbook-8ffd4.firebaseapp.com",
    databaseURL: "https://friendsbook-8ffd4.firebaseio.com",
    projectId: "friendsbook-8ffd4",
    storageBucket: "friendsbook-8ffd4.appspot.com",
    messagingSenderId: "315082652790",
    appId: "1:315082652790:web:8a3865898643d1e1813357",
    measurementId: "G-JZ1TJV0274"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDBEa4Ku4GGz4V4brCcl0rjotv6KJ5I0lo",
    authDomain: "facebook-messenger-clone-85f92.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-85f92-default-rtdb.firebaseio.com",
    projectId: "facebook-messenger-clone-85f92",
    storageBucket: "facebook-messenger-clone-85f92.appspot.com",
    messagingSenderId: "946766952096",
    appId: "1:946766952096:web:81fbc9c2d28483f4627bc5",
    measurementId: "G-TZQ5ZL3NNX"
});

const db = firebaseApp.firestore();

export default db;
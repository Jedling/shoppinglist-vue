import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD53iUSZHUMFXYE7PU8_c-xZhZI7p6iqV8",
  authDomain: "shoppinglist-d684b.firebaseapp.com",
  databaseURL: "https://shoppinglist-d684b.firebaseio.com",
  projectId: "shoppinglist-d684b",
  storageBucket: "shoppinglist-d684b.appspot.com",
  messagingSenderId: "1082048122070",
  appId: "1:1082048122070:web:0dff01f3c69722e3744d77",
  measurementId: "G-HYXJ9S3GQX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();
firestore.settings({});

export default firestore;

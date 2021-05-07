import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDK45ksmEeO-LAh5h6Y0hs2aai7o3T79fY",
  authDomain: "netflix-clone-98326.firebaseapp.com",
  projectId: "netflix-clone-98326",
  storageBucket: "netflix-clone-98326.appspot.com",
  messagingSenderId: "796741230784",
  appId: "1:796741230784:web:003fd1cff65c519ca8cd25",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

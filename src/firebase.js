import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyC6RreqvucXU5ImkZe2MC1UJyDnhDagABI",
  authDomain: "realtime-chat-app-f39df.firebaseapp.com",
  projectId: "realtime-chat-app-f39df",
  storageBucket: "realtime-chat-app-f39df.appspot.com",
  messagingSenderId: "97929306000",
  appId: "1:97929306000:web:6d5dc3260bb61ecc991d15",
  measurementId: "G-BRE072ELT0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

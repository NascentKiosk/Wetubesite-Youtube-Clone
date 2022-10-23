import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLEmnE_NAIvneMpzZKiauRcrhw2DXkdrA",
  authDomain: "yt-clone-1906.firebaseapp.com",
  projectId: "yt-clone-1906",
  storageBucket: "yt-clone-1906.appspot.com",
  messagingSenderId: "884111829150",
  appId: "1:884111829150:web:041a6a0ad647acdccbf38f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

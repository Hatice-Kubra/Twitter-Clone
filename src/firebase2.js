import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCJsrnPVIrv-Zpc3vSagpU9gXFe91nKVb4",
    authDomain: "twitter-clone-7aa49.firebaseapp.com",
    projectId: "twitter-clone-7aa49",
    storageBucket: "twitter-clone-7aa49.appspot.com",
    messagingSenderId: "471851426189",
    appId: "1:471851426189:web:1806dde8e071f706ef9dc4",
    measurementId: "G-0EL5GP1XV3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
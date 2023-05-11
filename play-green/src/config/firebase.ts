import * as firebase from 'firebase/app';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig= {
    apiKey: "AIzaSyDhQEdgTuYq-bPcISqaZE7DywRmZu0y8SM",
    authDomain: "playgreen-3e1c0.firebaseapp.com",
    projectId: "playgreen-3e1c0",
    storageBucket: "playgreen-3e1c0.appspot.com",
    messagingSenderId: "38920342932",
    appId: "1:38920342932:web:403126fa55308a9a6e1381",
    measurementId: "G-RHGM8MHKSV"
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
   
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


export{db,auth};


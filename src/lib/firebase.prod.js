import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyC4aYqZajnAO5gTh1IhVtm60_Q2CuMYSkk",
    authDomain: "netflix-clone-yash-98a67.firebaseapp.com",
    databaseURL: "https://netflix-clone-yash-98a67-default-rtdb.firebaseio.com",
    projectId: "netflix-clone-yash-98a67",
    storageBucket: "netflix-clone-yash-98a67.appspot.com",
    messagingSenderId: "599254026771",
    appId: "1:599254026771:web:5e686d761df569c0050de6",
    measurementId: "G-3GB1LTGT72"
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };
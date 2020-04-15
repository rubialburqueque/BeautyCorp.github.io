import firebase from 'firebase/app';
import 'firebase/firestore';

// Get a Firestore instance
const db = firebase.initializeApp({
  apiKey: 'AIzaSyAjOcddCtfogZNfcx1NzgO_Zcb96G615gM',
  authDomain: 'beauty-proyect.firebaseapp.com',
  databaseURL: 'https://beauty-proyect.firebaseio.com',
  projectId: 'beauty-proyect',
  storageBucket: 'beauty-proyect.appspot.com',
  messagingSenderId: '575562706309',
  appId: '1:575562706309:web:4e1b7395e17f6e3c1128ec',
  measurementId: 'G-DRGW0YTV6G',
});

export default db;

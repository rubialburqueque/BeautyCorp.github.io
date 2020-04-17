import * as firebase from 'firebase/app';
import 'firebase/firestore';


// Get a Firestore instance
const firebaseConfig = {
  apiKey: 'AIzaSyAZHUCFZ6X1v-V4IzVgoflz6fg9YETBR9M',
  authDomain: 'beautycorp-a8012.firebaseapp.com',
  databaseURL: 'https://beautycorp-a8012.firebaseio.com',
  projectId: 'beautycorp-a8012',
  storageBucket: 'beautycorp-a8012.appspot.com',
  messagingSenderId: '915148224057',
  appId: '1:915148224057:web:d176dca19cfcf5d248bfe8',
  measurementId: 'G-5LVWV0T0C6',
};

const db = firebase.initializeApp(firebaseConfig).firestore();


export default db;

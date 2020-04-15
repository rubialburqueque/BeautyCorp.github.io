import db from './db';
import 'firebase';

const singIn = (email, password) => db.auth().signInWithEmailAndPassword(email, password);

const createCount = (email, password) => db.auth().createUserWithEmailAndPassword(email, password);

export { singIn, createCount };

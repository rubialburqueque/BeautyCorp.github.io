import db from './db';
import 'firebase';

const singIn = db.auth().signInWithEmailAndPassword(this.email, this.password);

const createCount = db.auth().createUserWithEmailAndPassword(this.email, this.password);

export { singIn, createCount };

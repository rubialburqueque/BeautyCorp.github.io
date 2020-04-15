import db from './db';
import 'firebase';

const singIn = (email, password) => db.auth().signInWithEmailAndPassword(email, password);

const createCount = (email, password) => db.auth().createUserWithEmailAndPassword(email, password);

const newConsulter = (name, lastname, email, phone) => db.firestore().collection('consulter').add({
  name,
  lastname,
  email,
  phone,
});

export { singIn, createCount, newConsulter };

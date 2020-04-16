import db from './db';
import 'firebase';

const singIn = (email, password) => db.auth().signInWithEmailAndPassword(email, password);

const createCount = (email, password) => db.auth().createUserWithEmailAndPassword(email, password);

const newConsulter = (name, lastname, email, phone, code) => db.firestore().collection('consulter').add({
  name,
  lastname,
  email,
  phone,
  code,
});

const getDataPersonal = () => db.firestore().collection('consulter').get();

const signOff = () => db.auth.signOff();

export {
  singIn, createCount, newConsulter, getDataPersonal, signOff,
};

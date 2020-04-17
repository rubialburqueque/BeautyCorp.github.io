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
/* db.database().ref().child(''); */
const getDataPersonal = () => db.firestore().collection('consulter').get();

const signOff = () => db.auth.signOff();

const imagenFirebase = () => db.firestore.collection('Esika').get();

export {
  singIn, createCount, newConsulter, getDataPersonal, signOff, imagenFirebase,
};

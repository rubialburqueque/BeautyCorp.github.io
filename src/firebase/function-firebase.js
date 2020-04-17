import firebase from 'firebase';
import 'firebase/auth';

const singIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

const createCount = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

const newConsulter = (name, lastname, email, phone, code) => firebase.firestore().collection('consulter').add({
  name,
  lastname,
  email,
  phone,
  code,
});

const getDataPersonal = () => firebase.firestore().collection('consulter').get();

const SignOut = () => firebase.auth().signOff();

const catalogueFirebase = () => firebase.firestore().collection('Ofertas').get();

export {
  singIn, createCount, newConsulter, getDataPersonal, SignOut, catalogueFirebase,
};

import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import db from '../firebase/db';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: '',
    dataEsika: [],
    dataOffert: [],
    dataCLientes: [],
    dataPremios: [],
    dataCyzone: [],
    consultent: [],
    dataConsulter: [],
  },
  mutations: {
    ...vuexfireMutations,
    saveName(state, name) {
      state.name = name;
    },
    storeData(state, personal) {
      state.consultent.push(personal);
    },
    increment(state, index) {
      state.pedido.productUnit[index].count += 1;
    },
    decrement(state, index) {
      state.pedido.productUnit[index].count -= 1;
    },
    deleteProduct(state, x) {
      state.pedido.productUnit.splice(x, 1);
    },
    sumarTodo(state, { value }) {
      state.pedido.total = value;
    },
  },
  actions: {
    bindEsika: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('dataEsika', db.collection('Esika'))),
    bindconsulter: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('dataConsulter', db.collection('consulter'))),
    bindOfert: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('dataOffert', db.collection('Ofertas'))),
    bindCLientes: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('dataClientes', db.collection('Clientes'))),
    bindPremios: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('dataPremios', db.collection('Premios'))),
    bindCyzone: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('dataCyzone', db.collection('Cyzone'))),
    getName(context, name) {
      context.commit('saveName', name);
    },
    savedata(context, personal) {
      context.commit('storeData', personal);
    },
    sumarTodo(context) {
      let totales = 0;
      context.state.pedido.productUnit.forEach((unit) => {
        totales += unit.price * unit.count;
      });
      const payload = { value: totales };
      context.commit('sumarTodo', payload);
      // eslint-disable-next-line no-console
      console.log(totales);
    },
  },
  modules: {
  },
});

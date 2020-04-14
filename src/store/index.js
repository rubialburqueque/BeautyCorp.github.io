import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import db from '../db';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataPrueba: [],
  },
  mutations: {
    ...vuexfireMutations,
  },
  actions: {
    bindpruebas: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('dataPrueba', db.collection('pruebas'))),
  },
  modules: {
  },
});

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
    consultent: [],
  },
  mutations: {
    ...vuexfireMutations,
    saveName(state, name) {
      state.name = name;
    },
    storeData(state, personal) {
      state.consultent.push(personal);
    },
  },
  actions: {
    bindEsika: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('dataEsika', db.collection('Esika'))),
    bindOfert: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('dataOffert', db.collection('Ofertas'))),
    getName(context, name) {
      context.commit('saveName', name);
    },
    savedata(context, personal) {
      context.commit('storeData', personal);
    },
  },
  modules: {
  },
});

import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations } from 'vuexfire';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: '',
    dataPrueba: [],
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

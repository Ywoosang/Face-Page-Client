// store.js
import Vue from "vue";
import Vuex from "vuex";
import mutations from './mutations'; 
import state from './state';
import getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  mutations,
  getters
});
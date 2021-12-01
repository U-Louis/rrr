import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        selectedCard: "empty",
    },
    getters: {},
    mutations: {
        setSelectedCard(state, selection) {
            state.selectedCard = selection;
        },
    },
    actions: {},
    modules: {},
});
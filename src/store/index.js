import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        selectedCard: "empty",
        gridDeck: [],
        handDeck: [],
    },
    getters: {},
    mutations: {
        setSelectedCard(state, selection) {
            state.selectedCard = selection;
        },
        throwNewGame(state) {
            console.log("works");
            state.gridDeck = [0, 1, 2];
            console.log(state.gridDeck);
        },
    },
});
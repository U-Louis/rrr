import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        selectedCard: "empty",
    },
    getters: {},
    Mutation: {
        setSelectedCard(state, selection) {
            state.selectedCard = selection;
        },
    },
    actions: {},
    modules: {},
});
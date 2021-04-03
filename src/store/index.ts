import * as apiTo from "@/api";
// Libraries
import Vue from "vue";
import Vuex from "vuex";
// Types
import { Quote } from "@/types/quote";

Vue.use(Vuex);

const state: { quotes: Quote[] | null } = {
  quotes: null,
};

export default new Vuex.Store({
  state,

  mutations: {
    setQuotes: (state, quotes: Quote[]) => (state.quotes = quotes),
    addQuote: (state, quote: Quote) => state.quotes?.push(quote),
    updateQuote: (state, quote: Quote) => {
      if (!state.quotes) return;

      const quoteIndex = state.quotes.findIndex((q) => q.id === quote.id);
      if (~quoteIndex) state.quotes.splice(quoteIndex, 1, quote);
    },
    removeQuote: (state, id: string) =>
      (state.quotes = (state.quotes || []).filter((q) => q.id !== id)),
  },

  actions: {
    fetchQuotes({ commit }) {
      return apiTo.GET_QUOTES().then(({ data }) => commit("setQuotes", data));
    },
  },
});

import Vue from "vue";

export const mutations = {
  setIsLoading(state, status) {
    Vue.set(state, "isLoading", status);
  },
};

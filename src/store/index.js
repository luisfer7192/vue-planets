import Vue from "vue";
import Vuex from "vuex";

import planets from "./modules/planets";
import common from "./modules/common";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    planets,
    common,
  },
});

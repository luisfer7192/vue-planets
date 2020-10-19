import Vue from "vue";
import Vuex from "vuex";

import planets from "./modules/planets";
import characters from "./modules/characters";
import common from "./modules/common";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    planets,
    characters,
    common,
  },
});

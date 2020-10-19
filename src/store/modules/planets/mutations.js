import Vue from "vue";
import { parsePlanets, parsePlanet } from "../../../utils/parse";

export const mutations = {
  setPlanets(state, data) {
    const planets = parsePlanets(data);
    Vue.set(state, "planets", planets);
  },
  setCurrentPlanet(state, data) {
    const planet = parsePlanet(data);
    Vue.set(state, "currentPlanet", planet);
  },
  setCount(state, count) {
    Vue.set(state, "count", count);
  },
};

import Vue from "vue";
import { parseCharacters, parseCharacter } from "../../../utils/parse";

export const mutations = {
  setCharacters(state, data) {
    const characters = parseCharacters(data);
    Vue.set(state, "characters", characters);
  },
  setCurrentCharacter(state, data) {
    const character = parseCharacter(data);
    Vue.set(state, "currentCharacter", character);
  },
  setCount(state, count) {
    Vue.set(state, "count", count);
  },
};

import { ToastProgrammatic as Toast } from "buefy";
import { getCharacters, getCharacter } from "../../http/characters";
import { getPlanet } from "../../http/planets";
import { getIndexFromUrl } from "../../../utils/utils";

export const actions = {
  async getCharacters({ commit }, payload) {
    commit("setIsLoading", true, { root: true });
    const characters = await getCharacters(payload);
    if (!characters) {
      Toast.open({
        message: "Error getting the characters",
        type: "is-danger",
        position: "is-bottom",
      });

      return;
    }

    commit("setCharacters", characters.results);
    commit("setCount", characters.count);
    commit("setIsLoading", false, { root: true });
  },
  async getCharacter({ commit }, payload) {
    commit("setIsLoading", true, { root: true });
    const character = await getCharacter(payload);
    if (!character) {
      Toast.open({
        message: "Error getting the character",
        type: "is-danger",
        position: "is-bottom",
      });

      return;
    }

    const homeworld = { name: "", url: null };
    if (character.homeworld) {
      const planetId = getIndexFromUrl(character.homeworld);
      const planet = await getPlanet(planetId);
      if (planet) {
        console.log(planet);
        homeworld.name = planet.name;
        homeworld.url = `/planets/${planetId}`;
      }
    }
    character.homeworld = homeworld;
    commit("setCurrentCharacter", character);
    commit("setIsLoading", false, { root: true });
  },
};

import { ToastProgrammatic as Toast } from "buefy";
import { getPlanets, getPlanet } from "../../http/planets";

export const actions = {
  async getPlanets({ commit }, payload) {
    commit("setIsLoading", true, { root: true });
    const planets = await getPlanets(payload);
    if (!planets) {
      Toast.open({
        message: "Error getting the planets",
        type: "is-danger",
        position: "is-bottom",
      });

      return;
    }

    commit("setPlanets", planets.results);
    commit("setCount", planets.count);
    commit("setIsLoading", false, { root: true });
  },
  async getPlanet({ commit }, payload) {
    commit("setIsLoading", true, { root: true });
    const planet = await getPlanet(payload);
    if (!planet) {
      Toast.open({
        message: "Error getting the planet",
        type: "is-danger",
        position: "is-bottom",
      });

      return;
    }

    commit("setCurrentPlanet", planet);
    commit("setIsLoading", false, { root: true });
  },
};

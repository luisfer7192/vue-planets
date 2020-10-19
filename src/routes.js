import Header from "./components/Header";
import Home from "./pages/Home";
import PlanetsPage from "./pages/Planets";
import DetailPlanetPage from "./pages/DetailPlanet";

export const routes = [
  {
    path: "",
    name: "home",
    components: {
      default: Home,
      "header-top": Header,
    },
  },
  {
    path: "/planets",
    name: "planetsPage",
    components: {
      default: PlanetsPage,
      "header-top": Header,
    },
  },
  {
    path: "/planets/:id",
    name: "detailPlanetPage",
    components: {
      default: DetailPlanetPage,
      "header-top": Header,
    },
  },
  { path: "/redirect-me", redirect: { name: "home" } },
  { path: "*", redirect: "/" },
];

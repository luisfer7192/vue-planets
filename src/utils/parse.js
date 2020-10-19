import { getIndexFromUrl } from "./utils";

export const parsePlanets = (data) =>
  data.map((planet) => {
    const id = getIndexFromUrl(planet.url);

    return {
      id,
      name: planet.name,
      image: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
    };
  });

export const parsePlanet = (data) => {
  const id = getIndexFromUrl(data.url);

  return {
    ...data,
    id,
    image: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
  };
};

export const parseCharacters = (data) =>
  data.map((planet) => {
    const id = getIndexFromUrl(planet.url);

    return {
      id,
      name: planet.name,
      image: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
    };
  });

export const parseCharacter = (data) => {
  const id = getIndexFromUrl(data.url);

  return {
    ...data,
    species: data.species.join(", ") || "Unknown",
    id,
    image: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
  };
};

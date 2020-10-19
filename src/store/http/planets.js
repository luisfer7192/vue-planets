import axios from "../../utils/axios"; // install axios and config it when you want to use the endpoints

export const getPlanets = async (page = null) => {
  try {
    console.log({ page });
    const url = `planets${page ? `/?page=${page}` : ""}`;
    const response = await axios.get(url, { crossdomain: true });
    if (response.status === 200) {
      return response.data;
    }
    return false;
  } catch (error) {
    console.error("error", error);
    return false;
  }
};

export const getPlanet = async (id) => {
  try {
    const response = await axios.get(`planets/${id}`, { crossdomain: true });
    if (response.status === 200) {
      return response.data;
    }
    return false;
  } catch (error) {
    console.error("error", error);
    return false;
  }
};

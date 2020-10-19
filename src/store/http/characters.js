import axios from "../../utils/axios"; // install axios and config it when you want to use the endpoints

export const getCharacters = async (page = null) => {
  try {
    const url = `people${page ? `/?page=${page}` : ""}`;
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

export const getCharacter = async (id) => {
  try {
    const response = await axios.get(`people/${id}`, { crossdomain: true });
    if (response.status === 200) {
      return response.data;
    }
    return false;
  } catch (error) {
    console.error("error", error);
    return false;
  }
};

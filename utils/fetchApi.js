import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "1d1b691585msh36adc7d4261b4e0p1a04f7jsn1539916e91b5",
    },
  });
  return data;
};

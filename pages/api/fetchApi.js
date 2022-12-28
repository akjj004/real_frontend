import axios from "axios";

export const baseUrl = "http://localhost:8080/";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

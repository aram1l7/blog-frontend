import axios from "axios";

const { NODE_ENV, REACT_APP_DEV_API_URL, REACT_APP_PROD_API_URL } = process.env;

const apiUrl =
  (process.env.NODE_ENV === "development" ? REACT_APP_DEV_API_URL : REACT_APP_PROD_API_URL) ?? "";


export const getPosts = () => {
  return axios.get(apiUrl);
};

export const getPostById = (id: string) => {
  return axios.get(`${apiUrl}/${id}`);
};

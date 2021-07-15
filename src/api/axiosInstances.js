import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export const axiosMovies = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie`,
  params: { api_key: apiKey }
});

export const axiosSearch = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie`,
  params: { api_key: apiKey }
});

export const axiosDatabase = axios.create({
  baseURL: `https://movie-picker-application-default-rtdb.europe-west1.firebasedatabase.app/`
});
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export const axiosMovies = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`
});
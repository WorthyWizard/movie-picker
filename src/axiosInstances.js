import axios from 'axios';

const apiKey = 'ffd060a06690d2a4bc351e7e1e820854';

export const axiosMovies = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`
});
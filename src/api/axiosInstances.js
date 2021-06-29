import axios from 'axios';

export const axiosMovies = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie`
});
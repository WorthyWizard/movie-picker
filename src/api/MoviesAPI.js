import { axiosMovies } from './axiosInstances';

class MoviesAPI {
  static getMoviesByQuery(query) {
    return axiosMovies.get('', {
      params: {
        query
      }
    })
  }
}

export default MoviesAPI;
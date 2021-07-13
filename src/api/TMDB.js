import { axiosMovies } from './axiosInstances';

class TMDB {
  static getFullMovieData(id) {
    return axiosMovies.get(`${id}`, {
      params: { 
        append_to_response: 'images,videos,release_dates,credits,watch/providers,similar'
      }
    })
  }
  static getSimilarMovies(id, page = 1) {
    return axiosMovies.get(`${id}/similar`, {
      params: { page }
    })
  }
}

export default TMDB;
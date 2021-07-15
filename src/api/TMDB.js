import { axiosMovies, axiosSearch } from './axiosInstances';

class TMDB {
  static async getMovieFullData(id) {
    const { data } = await axiosMovies.get(`${id}`, {
      params: { 
        append_to_response: 'images,videos,release_dates,credits,watch/providers,similar'
      }
    });
    return data;
  }

  static async getSimilarMovies(id, page = 1) {
    const { data } = await axiosMovies.get(`${id}/similar`, {
      params: { page }
    });
    return data;
  }

  static async searchMovie(query, page = 1) {
    const { data } = await axiosSearch.get('', {
      params: { query, page }
    })
    return data;
  }
}

export default TMDB;
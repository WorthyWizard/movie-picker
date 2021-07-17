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

  static async searchMovie(query, page = 1) {
    const { data } = await axiosSearch.get('', {
      params: { query, page }
    })
    return data;
  }

  static async getSimilarMovies(id, page = 1) {
    const { data } = await axiosMovies.get(`${id}/similar`, {
      params: { page }
    });
    return data;
  }
  
  static async getRecommendedMovies(id, page = 1) {
    const { data } = await axiosMovies.get(`${id}/recommendations`, {
      params: { page }
    })
    return data;
  }

  static async getLatestMovie() {
    const { data } = await axiosMovies.get(`/latest`);
    return data;
  }

  static async getNowPlayingMovies(page = 1) {
    const { data } = await axiosMovies.get(`/now_playing`, {
      params: { page }
    })
    return data;
  }

  static async getPopularMovies(page = 1) {
    const { data } = await axiosMovies.get(`/popular`, {
      params: { page }
    })
    return data;
  }

  static async getTopRatedMovies(page = 1) {
    const { data } = await axiosMovies.get(`/top_rated`, {
      params: { page }
    })
    return data;
  }

  static async getUpcomingMovies(page = 1) {
    const { data } = await axiosMovies.get(`/upcoming`, {
      params: { page }
    })
    return data;
  }
}

export default TMDB;
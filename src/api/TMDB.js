import { axiosMovies } from './axiosInstances';

const apiKey = process.env.REACT_APP_API_KEY;

class TMDB {
  static getFullMovieData(id) {
    return axiosMovies.get(`${id}`, {
      params: { 
        append_to_response: 'images,videos,release_dates,credits,watch/providers,similar',
        api_key: apiKey
      }
    })
  }
  static getSimilarMovies(id, page = 1) {
    return axiosMovies.get(`${id}/similar`, {
      params: {
        page,
        api_key: apiKey
      }
    })
  }
}

export default TMDB;
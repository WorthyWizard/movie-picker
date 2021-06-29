import { axiosMovies } from './axiosInstances';

const apiKey = process.env.REACT_APP_API_KEY;

class TMDB {
  static getFullMovieData(id) {
    return axiosMovies.get(`${id}`, {
      params: { 
        append_to_response: 'images,videos,release_dates,credits,watch/providers',
        api_key: apiKey
      }
    })
  }
}

export default TMDB;
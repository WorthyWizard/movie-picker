import * as actionTypes from './actionTypes';
import TMDB from '../../api/TMDB';

const setSimilarMovies = (movies) => {
  return {
    type: actionTypes.SET_SIMILAR_MOVIES,
    movies
  }
}
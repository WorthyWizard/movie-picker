import * as actionTypes from './actionTypes';
import TMDB from '../../api/TMDB';
import Database from '../../api/database';

export const setSimilarMovies = (movies) => {
  return {
    type: actionTypes.SET_SIMILAR_MOVIES,
    movies
  }
}
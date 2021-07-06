import * as actionTypes from '../actions/actionTypes';
import { update } from '../../common/utils';

let initialState = {
  singleMovie: null,
  similarMovies: null,
  recommendedMovies: null,
  watchlistMovies: null,
  trendingMovies: null,
  topRatedMovies: null,
  searchMovies: null
}

const setSingleMovie = (state, action) => {
  return update(state, { singleMovie: action.movie })
}

const setSimilarMovies = (state, action) => {
  return update(state, { similarMovies: action.movies })
}

const movieReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_SINGLE_MOVIE: return setSingleMovie(state, action);
    case actionTypes.SET_SIMILAR_MOVIES: return setSimilarMovies(state, action);
    default: return state;
  }
}

export default movieReducer;
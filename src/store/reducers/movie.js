import * as actionTypes from '../actions/actionTypes';
import { updateState } from '../../common/utils';

let initialState = {
  singleMovie: {},
  recommendedMovies: [],
  watchlistMovies: [],
  trendingMovies: [],
  topRatedMovies: [],
  searchMovies: []
}

const setSingleMovie = (state, action) => {
  return updateState(state, { singleMovie: action.movie })
}

const movieReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_SINGLE_MOVIE: return setSingleMovie(state, action);
    default: return state;
  }
}

export default movieReducer;
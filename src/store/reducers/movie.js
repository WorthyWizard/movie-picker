import * as actionTypes from '../actions/actionTypes';
import { update } from '../../common/utils';

let initialState = {
  singleMovie: null,
  singleMovieLoading: false,
  singleMovieError: null,
  similarMovies: null,
  recommendedMovies: null,
  watchlistMovies: [],
  trendingMovies: null,
  topRatedMovies: null,
  searchMovies: null
}

const setSingleMovie = (state, action) => {
  return update(state, { singleMovie: action.movie })
}

const singleMovieFetchStart = (state) => {
  return update(state, { singleMovieLoading: true })
}

const singleMovieFetchSuccess = (state) => {
  return update(state, { singleMovieLoading: false })
}

const singleMovieFetchError = (state, action) => {
  return update(state, { singleMovieError: action.error })
}

const setSimilarMovies = (state, action) => {
  return update(state, { similarMovies: action.movies })
}

const setWatchlistMovie = (state, action) => {
  return update(state, { watchlistMovies: [...state.watchlistMovies, action.movie] })
}

const setWatchlistMovies = (state, action) => {
  return update(state, { watchlistMovies: action.movies })
}

const movieReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_SINGLE_MOVIE: return setSingleMovie(state, action);
    case actionTypes.SINGLE_MOVIE_FETCH_START: return singleMovieFetchStart(state);
    case actionTypes.SINGLE_MOVIE_FETCH_SUCCESS: return singleMovieFetchSuccess(state);
    case actionTypes.SINGLE_MOVIE_FETCH_ERROR: return singleMovieFetchError(state, action);
    case actionTypes.SET_SIMILAR_MOVIES: return setSimilarMovies(state, action);
    case actionTypes.SET_WATCHLIST_MOVIE: return setWatchlistMovie(state, action);
    case actionTypes.SET_WATCHLIST_MOVIES: return setWatchlistMovies(state, action);
    default: return state;
  }
}

export default movieReducer;
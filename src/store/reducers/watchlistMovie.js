import * as actionTypes from '../actions/actionTypes';
import { update } from '../../common/utils';
let initialState = {
  movies: [],
  isLoading: false,
  isMovieLoading: false,
  error: null,
  movieError: null
}

const setMovie = (state, action) => {
  return update(state, { movies: [...state.movies, action.movie] })
}

const setMovies = (state, action) => {
  return update(state, { movies: action.movies })
}

const deleteWatchlistMovie = (state, action) => {
  const newMovies = state.movies.filter(movie => movie.dbID !== action.dbID)
  return update(state, { movies: [...newMovies] })
}

const moviesFetchStart = (state, action) => {
  return update(state, { isLoading: true })
}

const moviesFetchSuccess = (state, action) => {
  return update(state, { isLoading: false, error: null })
}

const moviesFetchFail = (state, action) => {
  return update(state, { isLoading: false, error: action.error })
}

const moviePostStart = (state, action) => {
  return update(state, { isMovieLoading: true })
}

const moviePostSuccess = (state, action) => {
  return update(state, { isMovieLoading: false, movieError: null })
}

const moviePostFail = (state, action) => {
  return update(state, { isMovieLoading: false, movieError: action.error })
}

const watchlistReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_WATCHLIST_MOVIE: return setMovie(state, action);
    case actionTypes.SET_WATCHLIST_MOVIES: return setMovies(state, action);
    case actionTypes.DELETE_WATCHLIST_MOVIE: return deleteWatchlistMovie(state, action);
    case actionTypes.WATCHLIST_MOVIE_POST_START: return moviePostStart(state, action);
    case actionTypes.WATCHLIST_MOVIE_POST_SUCCESS: return moviePostSuccess(state, action);
    case actionTypes.WATCHLIST_MOVIE_POST_FAIL: return moviePostFail(state, action);
    case actionTypes.WATCHLIST_MOVIES_FETCH_START: return moviesFetchStart(state, action);
    case actionTypes.WATCHLIST_MOVIES_FETCH_SUCCESS: return moviesFetchSuccess(state, action);
    case actionTypes.WATCHLIST_MOVIES_FETCH_FAIL: return moviesFetchFail(state, action);
    default: return state;
  }
}

export default watchlistReducer;
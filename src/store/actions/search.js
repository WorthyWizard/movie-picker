import TMDB from "../../api/TMDB";
import * as actionTypes from './actionTypes';

const searchFetchStart = () => {
  return {
    type: actionTypes.SEARCH_MOVIES_FETCH_START
  }
}

const searchFetchSuccess = () => {
  return {
    type: actionTypes.SEARCH_MOVIES_FETCH_SUCCESS
  }
}

const searchFetchFail = (error) => {
  return {
    type: actionTypes.SEARCH_MOVIES_FETCH_FAIL,
    error
  }
}

const setSearchedMovies = (movies) => {
  return {
    type: actionTypes.SET_SEARCHED_MOVIES,
    movies
  }
}

export const searchMovies = (query) => {
  return dispatch => {
    dispatch(searchFetchStart());
    TMDB.searchMovie(query).then(data => {
      dispatch(searchFetchSuccess());
      dispatch(setSearchedMovies(data.results));
    })
    .catch(error => {
      dispatch(searchFetchFail(error))
    })
  }
}
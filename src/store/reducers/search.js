import * as actionTypes from '../actions/actionTypes';
import { update } from '../../common/utils';

let initialState = {
  movies: [],
  isLoading: false,
  error: null
}

const searchFetchStart = (state, action) => {
  return update(state, { isLoading: true })
}

const searchFetchSuccess = (state, action) => {
  return update(state, { isLoading: false, error: null })
}

const searchFetchFail = (state, action) => {
  return update(state, { isLoading: false, error: action.error?.message })
}

const setSearchedMovies = (state, action) => {
  return update(state, { movies: [...action.movies] })
}

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_MOVIES_FETCH_START: return searchFetchStart(state, action);
    case actionTypes.SEARCH_MOVIES_FETCH_SUCCESS: return searchFetchSuccess(state, action);
    case actionTypes.SEARCH_MOVIES_FETCH_FAIL: return searchFetchFail(state, action);
    case actionTypes.SET_SEARCHED_MOVIES: return setSearchedMovies(state, action);
    default: return state;
  }
}

export default searchReducer;
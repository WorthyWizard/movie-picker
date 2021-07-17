import * as actionTypes from '../actions/actionTypes';
import { update } from '../../common/utils';

let initialState = {
  latest: null,
  similar: [],
  recommended: [],
  trending: [],
  topRated: [],
  upcoming: [],
  nowPlaying: []
}

const setSimilar = (state, action) => {
  return update(state, { similar: action.movies })
}

const movieReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_SIMILAR_MOVIES: return setSimilar(state, action);
    default: return state;
  }
}

export default movieReducer;
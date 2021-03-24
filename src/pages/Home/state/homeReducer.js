import * as actionTypes from '../../../common/actionTypes';

let initialState = {
  movies: []
}

const homeReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_MOVIES:
      return {
        ...state,
        movies: [...action.movies]
      }
    default:
      return state;
  }
}

export default homeReducer;
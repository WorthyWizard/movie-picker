import * as actionTypes from './actionTypes';
import TMDB from '../../api/TMDB';
import Database from '../../api/database';
import { objectToArray } from '../../common/utils';

export const setSingleMovie = (movie) => {
  return {
    type: actionTypes.SET_SINGLE_MOVIE,
    movie
  }
}

export const singleMovieFetchStart = () => {
  return {
    type: actionTypes.SINGLE_MOVIE_FETCH_START,
  }
}

export const singleMovieFetchSuccess = () => {
  return {
    type: actionTypes.SINGLE_MOVIE_FETCH_SUCCESS,
  }
}

export const singleMovieFetchError = (error) => {
  return {
    type: actionTypes.SINGLE_MOVIE_FETCH_ERROR,
    error
  }
}

export const setSimilarMovies = (movies) => {
  return {
    type: actionTypes.SET_SIMILAR_MOVIES,
    movies
  }
}

export const getMovie = (id) => {
  return dispatch => {
    dispatch(singleMovieFetchStart());
    TMDB.getFullMovieData(id).then(response => {
      dispatch(setSingleMovie(response.data));
      dispatch(singleMovieFetchSuccess());
    }).catch(error => {
      dispatch(singleMovieFetchError(error));
    }) 
  }
}

/*
export const getSimilarMovies = (id, page) => {
  return dispatch => {
    TMDB.getSimilarMovies(id, page).then(response => {
      dispatch(setSimilarMovies(response.data.results));
    })
  }
}
*/

export const setWatchlistMovies = (movies) => {
  return {
    type: actionTypes.SET_WATCHLIST_MOVIES,
    movies
  }
}

export const setWatchlistMovie = (movie) => {
  return {
    type: actionTypes.SET_WATCHLIST_MOVIE,
    movie
  }
}

export const postWatchlistMovie = (data) => {
  return dispatch => {
    Database.postWatchlistMovie(data).then(res => {
      dispatch(setWatchlistMovie({
        ...data,
        dbID: res.data.name
      }))
    });
  }
}

export const getWatchlistMovies = () => {
  return dispatch => {
    // Database.getWatchlistMovies().then(res => {
    //   const data = [];
    //   for(let key in res.data) {
    //     data.push({
    //       ...res.data[key],
    //       dbID: key
    //     });
    //   }
    //   dispatch(setWatchlistMovies(data));
    // })
  }
}

export const removeWatchlistMovie = (dbID) => {
  return {
    type: actionTypes.DELETE_WATCHLIST_MOVIE,
    dbID
  }
}

export const deleteWatchlistMovie = (id) => {
  return dispatch => {
    Database.deleteWatchlistMovie(id).then(res => {
      dispatch(removeWatchlistMovie());
    })
  }
}



import { useContext } from 'react';
import * as actionTypes from './actionTypes';
import TMDB from '../../api/TMDB';
import Database from '../../api/database';

const watchlistMoviePostStart = () => {
  return {
    type: actionTypes.WATCHLIST_MOVIE_POST_START,
  }
}

const watchlistMoviePostSuccess = () => {
  return {
    type: actionTypes.WATCHLIST_MOVIE_POST_SUCCESS,
  }
}

const watchlistMoviePostFail = (error) => {
  return {
    type: actionTypes.WATCHLIST_MOVIE_POST_FAIL,
    error
  }
}

export const postWatchlistMovie = (data, watchlist, setIsBtnActive) => {
  return dispatch => {
    dispatch(watchlistMoviePostStart());
    Database.postWatchlistMovie(data).then(res => {
      watchlist.add(data.id);
      setIsBtnActive(true);
      dispatch(watchlistMoviePostSuccess());
      dispatch(setWatchlistMovie({ ...data, dbID: res.data.name }))
    })
    .catch(error => {
      dispatch(watchlistMoviePostFail(error))
    });
  }
}

const moviesFetchStart = () => {
  return {
    type: actionTypes.WATCHLIST_MOVIES_FETCH_START
  }
}

const moviesFetchSuccess = () => {
  return {
    type: actionTypes.WATCHLIST_MOVIES_FETCH_SUCCESS
  }
}

const moviesFetchFail = (error) => {
  return {
    type: actionTypes.WATCHLIST_MOVIES_FETCH_FAIL,
    error
  }
}

const setWatchlistMovie = (movie) => {
  return {
    type: actionTypes.SET_WATCHLIST_MOVIE,
    movie
  }
}

const setWatchlistMovies = (movies) => {
  return {
    type: actionTypes.SET_WATCHLIST_MOVIES,
    movies
  }
}

export const getWatchlistMovies = () => {
  return dispatch => {
    dispatch(moviesFetchStart());
    Database.getWatchlistMovies().then(res => {
      dispatch(moviesFetchSuccess());
      const data = [];
      for(let key in res.data) {
        data.push({
          ...res.data[key],
          dbID: key
        });
      }
      dispatch(setWatchlistMovies(data));
    })
    .catch(error => {
      dispatch(moviesFetchFail(error))
    })
  }
}

const removeWatchlistMovie = (dbID) => {
  return {
    type: actionTypes.DELETE_WATCHLIST_MOVIE,
    dbID
  }
}

export const deleteWatchlistMovie = (dbID, movieID, watchlist, setIsBtnActive) => {
  return dispatch => {
    Database.deleteWatchlistMovie(dbID).then(res => {
      watchlist.remove(movieID);
      setIsBtnActive(false);
      dispatch(removeWatchlistMovie(dbID));
    })
  }
}



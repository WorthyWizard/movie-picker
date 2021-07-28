import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { watchlist } from '../common/localStorage';
import * as actions from '../store/actions';

export const useWatchlist = (id, data = {}) => {

  const getFilteredItem = useCallback(() => watchlist.get().filter(item => item.id === id), []);

  let isInWatchlist = getFilteredItem().length !== 0;

  const dispatch = useDispatch();
  const [ hasItem, setHasItem ] = useState(isInWatchlist);
  const isMovieLoading = useSelector(state => state.watchlist.isMovieLoading);
  
  const toggleWatchlistMovie = useCallback(() => {
    if(!isMovieLoading) {
      const filteredItem = getFilteredItem();
      if(filteredItem.length === 0) {
        dispatch(actions.postWatchlistMovie(data, watchlist, setHasItem));
      } else {
        const dbID = filteredItem[0]?.dbID;
        if(dbID) {
          dispatch(actions.deleteWatchlistMovie(dbID, id, watchlist, setHasItem));
        }
      }
    }
  }, []);

  const addWatchlistMovie = useCallback(() => {
    if(!isMovieLoading) {
      const filteredItem = getFilteredItem(id);
      if(filteredItem.length === 0) {
        dispatch(actions.postWatchlistMovie(data, watchlist, setHasItem));
      }
    }
  }, []);

  const removeWatchlistMovie = useCallback(() => {
    if(!isMovieLoading) {
      const dbID = getFilteredItem()[0]?.dbID;
      if(dbID) {
        dispatch(actions.deleteWatchlistMovie(dbID, id, watchlist, setHasItem));
      }
    }
  }, []);

  return {
    hasItem,
    toggleWatchlistMovie,
    addWatchlistMovie,
    removeWatchlistMovie
  }

}


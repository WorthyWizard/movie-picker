import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { watchlist } from '../../common/localStorage';
import * as actions from '../../store/actions';

export const useWatchlist = () => {
  const dispatch = useDispatch();
  const [hasItem, setHasItem] = useState(watchlist.has(id));
  const watchlistMovies = useSelector(state => state.watchlist.movies);
  const isMovieLoading = useSelector(state => state.watchlist.isMovieLoading);
  
  const toggleWatchlistMovie = data => {
    if(!isMovieLoading) {
      const hasItem = watchlist.has(id);
      if(!hasItem) {
        dispatch(actions.postWatchlistMovie(data, watchlist, setHasItem));
      } else {
        const filteredMovie = watchlistMovies.filter(movie => id === movie.id);
        if(filteredMovie.length > 0) {
          dispatch(actions.deleteWatchlistMovie(filteredMovie[0].dbID, id, watchlist, setHasItem));
        }
      }
    }
  };

  return {
    hasItem,
    toggleWatchlistMovie
  }

}


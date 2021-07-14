import React from 'react';
import { LocalStorageItem } from '../common/utils';

export const LocalStorageContext = React.createContext();

const LocalStorageProvider = props => {
  const value = {
    watchlist: new LocalStorageItem('watchlistMovies', [])
  }

  return (
    <LocalStorageContext.Provider value={value}>
      {props.children}
    </LocalStorageContext.Provider>
  );
}

export default LocalStorageProvider;




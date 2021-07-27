import React from 'react';
import firebase from '../api/firebase';

export const FirebaseContext = React.createContext();

const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ ...firebase }}>
      { children }
    </FirebaseContext.Provider>
  );
}

export default FirebaseProvider;



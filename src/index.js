import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

import movieReducer from "./store/reducers/movies";
import singleMovieReducer from "./store/reducers/singleMovie";
import watchlistReducer from "./store/reducers/watchlist";
import searchReducer from "./store/reducers/search";
import recommendedReducer from "./store/reducers/recommended";
import popularReducer from "./store/reducers/popular";
import topRatedReducer from "./store/reducers/topRated";

import App from "./App";
import LocalStorageProvider from './context/localStorage';

const rootReducer = combineReducers({
  movie: movieReducer,
  singleMovie: singleMovieReducer,
  watchlist: watchlistReducer,
  search: searchReducer,
  recommended: recommendedReducer,
  popular: popularReducer,
  topRated: topRatedReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = process.env.NODE_ENV !== 'production' ? 
  [require('redux-immutable-state-invariant').default(), thunk] : 
  [thunk];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

const application = (
  <Provider store={store}>
    <BrowserRouter>
      <LocalStorageProvider>
        <App />
      </LocalStorageProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(application, document.getElementById("root"));

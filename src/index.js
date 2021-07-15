import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

import movieReducer from "./store/reducers/movie";
import singleMovieReducer from "./store/reducers/singleMovie";
import watchlistReducer from "./store/reducers/watchlistMovie";

import App from "./App";
import LocalStorageProvider from './context/localStorage';

const rootReducer = combineReducers({
  movie: movieReducer,
  singleMovie: singleMovieReducer,
  watchlist: watchlistReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
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

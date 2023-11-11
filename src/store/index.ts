import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { movieAPI, searchAPI } from "@/services";

const rootReducer = combineReducers({
  [movieAPI.reducerPath]: movieAPI.reducer,
  [searchAPI.reducerPath]: searchAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(
        movieAPI.middleware,
        searchAPI.middleware
      );
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

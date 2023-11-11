import { Navigate, RouteObject } from "react-router-dom";

import { AccountPage } from "../pages/Account";
import { AuthPage } from "../pages/Auth";
import { DiscoverPage } from "../pages/Discover";
import { HomePage } from "../pages/Home";
import { MoviePage } from "../pages/Movie";
import { SearchPage } from "../pages/Search";
import { WatchlistPage } from "../pages/Watchlist";

import * as endpoints from "./routesEndpoints";

export const publicRoutes: RouteObject[] = [
  {
    path: endpoints.AUTH_PAGE,
    element: <AuthPage />,
  },
  {
    path: "*",
    element: <Navigate to={endpoints.AUTH_PAGE} />,
  },
];

export const privateRoutes: RouteObject[] = [
  {
    path: endpoints.HOME_PAGE,
    element: <HomePage />,
  },
  {
    path: endpoints.DISCOVER_PAGE,
    element: <DiscoverPage />,
  },
  {
    path: endpoints.SEARCH_PAGE,
    element: <SearchPage />,
  },
  {
    path: endpoints.WATCHLIST_PAGE,
    element: <WatchlistPage />,
  },
  {
    path: endpoints.MOVIE_PAGE,
    element: <MoviePage />,
  },
  {
    path: endpoints.ACCOUNT_PAGE,
    element: <AccountPage />,
  },
  {
    path: "*",
    element: <Navigate to={endpoints.HOME_PAGE} />,
  },
];

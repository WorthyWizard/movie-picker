import AuthPage from "../pages/Auth/AuthPage";
import HomePage from "../pages/Home/HomePage";
import DiscoverPage from "../pages/Discover/DiscoverPage";
import SearchPage from "../pages/Search/SearchPage";
import WatchlistPage from "../pages/Watchlist/WatchlistPage";
import MoviePage from "../pages/Movie/MoviePage";
import AccountPage from "../pages/AccountPage/AccountPage";
import * as endpoints from "./routesEndpoints";
import { Navigate, RouteObject } from "react-router-dom";

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

import AuthPage from '../pages/Auth/AuthPage';
import HomePage from '../pages/Home/HomePage';
import DiscoverPage from '../pages/Discover/DiscoverPage';
import SearchPage from '../pages/Search/SearchPage';
import WatchlistPage from '../pages/Watchlist/WatchlistPage';
import MoviePage from '../pages/Movie/MoviePage';
import AccountPage from '../pages/AccountPage/AccountPage';
import * as endpoints from './routesEndpoints';

export const publicRoutes = [
  {
    path: endpoints.REGISTRATION_PAGE,
    Component: AuthPage
  }
]

export const privateRoutes = [
  {
    path: endpoints.HOME_PAGE,
    Component: HomePage
  },
  {
    path: endpoints.DISCOVER_PAGE,
    Component: DiscoverPage
  },
  {
    path: endpoints.SEARCH_PAGE,
    Component: SearchPage
  },
  {
    path: endpoints.WATCHLIST_PAGE,
    Component: WatchlistPage
  },
  {
    path: endpoints.MOVIE_PAGE,
    Component: MoviePage
  },
  {
    path: endpoints.ACCOUNT_PAGE,
    Component: AccountPage
  }
]
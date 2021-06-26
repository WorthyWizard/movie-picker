import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import DiscoverPage from './pages/Discover/DiscoverPage';
import SearchPage from './pages/Search/SearchPage';
import WatchlistPage from './pages/Watchlist/WatchlistPage';
import MoviePage from './pages/Movie/MoviePage';
import './App.css';

function App() {
  return (
    <div id='page'>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/discover' component={DiscoverPage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/watchlist' component={WatchlistPage} />
          <Route path='/movie' component={MoviePage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;

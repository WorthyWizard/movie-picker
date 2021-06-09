import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import './App.css';

function App() {
  return (
    <div id='page'>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/discover' component={Discover} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;

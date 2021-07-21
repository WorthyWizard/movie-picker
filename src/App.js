import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './router/Router';
import './App.css';

function App() {
  return (
    <div id='page'>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;

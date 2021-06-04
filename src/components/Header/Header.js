import React from 'react';

import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import { Face } from '@material-ui/icons';

const Header = () => {
  return (
    <header className={s.Header}>
      <div className={s.HeaderInner}>
        <div className={s.HeaderContent}>
          <h1><NavLink className={s.HeaderLogo} exact to='/'>MoviePicker</NavLink></h1>
          <nav>
            <ul>
              <li><NavLink activeClassName={s.active} exact to='/'>Home</NavLink></li>
              <li><NavLink activeClassName={s.active} to='/discover'>Discover</NavLink></li>
              <li><NavLink activeClassName={s.active} to='/search'>Search</NavLink></li>
            </ul> 
          </nav>
          <div className={s.HeaderUserBlock}>
            <div className={s.WatchlistIcon}>
              <NavLink activeClassName={s.active} to='/watchlist'><FavoriteBorderOutlined /></NavLink>
            </div>
            <div className={s.AccountIcon}>
              <NavLink activeClassName={s.active} to='/account'><Face /></NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
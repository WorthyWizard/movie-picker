import React from 'react';

import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import { Face } from '@material-ui/icons';

const Header = () => {
  return (
    <div className={s.Header}>
      <div className={s.HeaderInner}>
        <div className={s.HeaderContent}>
          <h1 className={s.HeaderLogo}>MoviePicker</h1>
          <nav>
            <ul>
              <li><NavLink activeClassName="active-menu-item" exact to='/'>Home</NavLink></li>
              <li><NavLink activeClassName="active" to='/discover'>Discover</NavLink></li>
              <li><NavLink activeClassName="active" to='/search'>Search</NavLink></li>
            </ul> 
          </nav>
          <div className={s.HeaderUserBlock}>
            <div className={s.WatchlistIcon}>
              <NavLink to='/watchlist'><FavoriteBorderOutlined /></NavLink>
            </div>
            <div className={s.AccountIcon}>
              <NavLink to='/account'><Face /></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
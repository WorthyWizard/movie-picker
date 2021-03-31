import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderInner}>
        <div className='wrapper'>
          <div className={styles.HeaderContent}>
            <h1>MoviePicker</h1>
            <nav>
              <ul>
                <li><NavLink exact to='/'>Home</NavLink></li>
                <li><NavLink to='/favourites'>Favourites</NavLink></li>
                <li><NavLink to='/auth'>Sign In</NavLink></li>
              </ul> 
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
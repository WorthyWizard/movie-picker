import React, { useEffect, useState } from 'react';
import s from './Search.module.css';

const Search = ({ onSearch }) => {
  
  let timeout = null;

  const [searchText, onSearchTextChange] = useState('');

  useEffect(() => {
    if(searchText && searchText.length >= 3) {
      
    }
  }, [searchText])

  const setTextWithTimeout = (text) => {
    if(timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => onSearchTextChange(text), 700);
  }

  return (
    <div className={s.SearchInputWrapper}>
      <input 
        type="text" 
        placeholder="Movie title"
        onChange={(e) => setTextWithTimeout(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;
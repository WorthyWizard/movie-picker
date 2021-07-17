import React, { useEffect, useState } from 'react';
import s from './Search.module.css';

const Search = ({ onSearch }) => {
  
  let timeout = null;

  const [searchText, onSearchTextChange] = useState('');

  useEffect(() => {
    if(searchText && searchText.length >= 3) {
      onSearch(searchText);
    }
    return () => {
      if(timeout) {
        clearTimeout(timeout);
      }
    }
  }, [searchText])

  const setTextWithTimeout = (text) => {
    if(timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => onSearchTextChange(text.toLowerCase()), 700);
  }

  return (
    <div className={s.SearchInputWrapper}>
      <input 
        type="text" 
        placeholder="Type at least 3 characters"
        onChange={(e) => setTextWithTimeout(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;
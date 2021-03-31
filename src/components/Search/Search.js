import React, { Component } from 'react';
import s from './Search.module.css';

class Search extends Component {

  state = {
    searchText: '',
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.searchText && this.state.searchText !== prevState.searchText) {
      this.props.onMovieSearch(this.state.searchText);
    }
  }

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  }

  render() {

    return (
      <div className={s.SearchContainer}>
        <input 
          type="text" 
          placeholder="search movie"
          onChange={this.onInputChange}
        ></input>
      </div>
    );
  }
}

export default Search;
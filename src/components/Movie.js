import React from 'react';
import styles from './Movie.module.css';

const Movie = (props) => {
  return (
    <div className={styles.Movie}>
      <h2>{props.original_title}</h2>
      <img src={'https://image.tmdb.org/t/p/original'+ props.poster_path} alt={props.original_title}></img>
      <p>{props.overview}</p>
    </div>
  );
};

export default Movie;
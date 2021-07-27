import React from "react";

import s from './Grid.module.css';
import Movie from '../../components/Movie/Movie';

const Grid = ({ data }) => {
  
  const movies = data.map((movie, i) => <Movie key={movie.id} data={movie} />);

  return (
    <div className={s.Grid}>
      <div className={s.GridInner}>
        {movies}
      </div>
    </div>
  );
};

export default Grid;

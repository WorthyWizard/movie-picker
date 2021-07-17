import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import s from './DiscoverPage.module.css';
import Movie from '../../components/Movie/Movie';
import SliderBlock from '../../components/Slider/SliderBlock';
import background from '../../assets/Hero-image.jpg';
import * as actions from '../../store/actions';

import Hero from '../../components/Hero/Hero';

const DiscoverPage = () => {

  const dispatch = useDispatch();
  const popular = useSelector(state => state.popular.movies);
  const isPopularLoading = useSelector(state => state.popular.isLoading);
  const topRated = useSelector(state => state.topRated.movies);
  const isTopRatedLoading = useSelector(state => state.topRated.isLoading);

  useEffect(() => {
    dispatch(actions.getPopularMovies());
    dispatch(actions.getTopRatedMovies());
  }, [dispatch]);

  const popularMovies = popular.map(movie => <Movie key={movie.id} data={movie} />);
  const topRatedMovies = topRated.map(movie => <Movie key={movie.id} data={movie} />);

  return (
    <div className={s.Homepage}>
      <Hero text='Discover new awesome movies' styles={{ backgroundImage: `url(${background})` }} />
      <SliderBlock 
        id={1} 
        title='Check out this trending titles' 
        data={popularMovies}
        isLoading={isPopularLoading} 
      />
      <SliderBlock 
        id={2} 
        className={s.WatchlistBlock}
        title='Top rated movies just for you'
        data={topRatedMovies}
        isLoading={isTopRatedLoading} 
      />
    </div>
  );
};

export default DiscoverPage;

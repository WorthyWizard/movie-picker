import React from 'react';

import { ImagesEndpoints } from '../../common/utils';

import s from './Movie.module.css';

const Movie = (props) => {

  const { backdrop_path, poster_path, vote_average, original_title, genres, runtime, overview } = props.data;

  const getGenreString = (genres) => genres.map(genre => genre.name).join(', ');
  const getRuntimeString = (time) => {
    const hours = Math.floor(time / 60);
    const minutesLeft = time - hours * 60;
    return `${hours}h ${minutesLeft}m`;
  }

  const fullsize = (

    <section className={s.FullsizeMovie} style={{ background: `url(${ImagesEndpoints.backgrop() + backdrop_path})` }}>
      <div className={s.FullsizeMovieInner}>
        <div className={s.Poster}>
          <img src={ImagesEndpoints.poster() + (poster_path ? poster_path : '')} alt={original_title} />
          <div className={s.Rating}>
            <div>{vote_average}</div>
          </div>
        </div>
        <div className={s.MovieInfo}>
          <h2 className={s.MovieTitle}>{original_title}</h2>
          <div className={s.MovieFactsWrapper}>
            <div className={s.MovieGenre}>{getGenreString(genres)}</div>
            <div className={s.MovieRuntime}>{getRuntimeString(runtime)}</div>
            <div className={s.MoviePG}>PG-13</div>
          </div>
          <p className={s.MovieOverview}>{overview}</p>
          <div className={s.MovieButtons}>
            <div className={s.MovieWatchBtn}>
              <button>Watch</button>
            </div>
            <div className={s.MovieWatchlistBtn}>
              <button>Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className={s.BackdropFilter}></div>
    </section>

  );

  return (
    <>
      {fullsize}
    </>
  );
};

/*

const movie = {
  "adult": false,
  "backdrop_path": "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
  "belongs_to_collection": null,
  "budget": 63000000,
  "genres": [
    {
      "id": 18,
      "name": "Drama"
    }
  ],
  "homepage": "",
  "id": 550,
  "imdb_id": "tt0137523",
  "original_language": "en",
  "original_title": "Fight Club",
  "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
  "popularity": 0.5,
  "poster_path": null,
  "production_companies": [
    {
      "id": 508,
      "logo_path": "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
      "name": "Regency Enterprises",
      "origin_country": "US"
    },
    {
      "id": 711,
      "logo_path": null,
      "name": "Fox 2000 Pictures",
      "origin_country": ""
    },
    {
      "id": 20555,
      "logo_path": null,
      "name": "Taurus Film",
      "origin_country": ""
    },
    {
      "id": 54050,
      "logo_path": null,
      "name": "Linson Films",
      "origin_country": ""
    },
    {
      "id": 54051,
      "logo_path": null,
      "name": "Atman Entertainment",
      "origin_country": ""
    },
    {
      "id": 54052,
      "logo_path": null,
      "name": "Knickerbocker Films",
      "origin_country": ""
    },
    {
      "id": 25,
      "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
      "name": "20th Century Fox",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "1999-10-12",
  "revenue": 100853753,
  "runtime": 139,
  "spoken_languages": [
    {
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "How much can you know about yourself if you've never been in a fight?",
  "title": "Fight Club",
  "video": false,
  "vote_average": 7.8,
  "vote_count": 3439
}

*/

export default Movie;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiEndpoints } from "@/api/apiEndpoints";
import { MoviesDataByPage } from "@/types/movie/data";
import { MovieQueryParams, MovieRequestData } from "@/types/movie/mutations";
import { MovieFullData } from "@/types/movie/transformed";

const apiKey = import.meta.env.VITE_MOVIE_DB_API_KEY;

export const movieAPI = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: apiEndpoints.MOVIE_URL,
  }),
  endpoints: (builder) => ({
    getMovieFullData: builder.query<MovieFullData, MovieRequestData>({
      query: ({ id, ...rest }) => ({
        url: `/${id}`,
        params: {
          ...rest,
          api_key: apiKey,
          append_to_response:
            "images,videos,release_dates,credits,watch/providers,similar",
        },
      }),
    }),
    getSimilarMovies: builder.query<MoviesDataByPage, MovieRequestData>({
      query: ({ id, ...rest }) => ({
        url: `/${id}/similar`,
        params: {
          ...rest,
          api_key: apiKey,
        },
      }),
    }),
    getRecommendedMovies: builder.query<MoviesDataByPage, MovieRequestData>({
      query: ({ id, ...rest }) => ({
        url: `/${id}/recommendations`,
        params: {
          ...rest,
          api_key: apiKey,
        },
      }),
    }),
    getLatestMovies: builder.query<MoviesDataByPage, MovieQueryParams>({
      query: (params) => ({
        url: `/latest`,
        params: {
          ...params,
          api_key: apiKey,
        },
      }),
    }),
    getNowPlayingMovies: builder.query<MoviesDataByPage, MovieQueryParams>({
      query: (params) => ({
        url: `/now_playing`,
        params: {
          ...params,
          api_key: apiKey,
        },
      }),
    }),
    getPopularMovies: builder.query<MoviesDataByPage, MovieQueryParams>({
      query: (params) => ({
        url: `/popular`,
        params: {
          ...params,
          api_key: apiKey,
        },
      }),
    }),
    getTopRatedMovies: builder.query<MoviesDataByPage, MovieQueryParams>({
      query: (params) => ({
        url: `/top_rated`,
        params: {
          ...params,
          api_key: apiKey,
        },
      }),
    }),
    getUpcomingMovies: builder.query<MoviesDataByPage, MovieQueryParams>({
      query: (params) => ({
        url: `/upcoming`,
        params: {
          ...params,
          api_key: apiKey,
        },
      }),
    }),
  }),
});

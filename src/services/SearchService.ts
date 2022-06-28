import apiEndpoint from "@/api/apiEndpoints";
import { MoviesDataByPage } from "@/types/movie/rawTypes";
import { MovieSearchParams } from "@/types/movie/requests";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_MOVIE_DB_API_KEY;

const searchAPI = createApi({
  reducerPath: "searchAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: apiEndpoint.SEARCH_URL,
  }),
  endpoints: (builder) => ({
    searchMovie: builder.query<MoviesDataByPage, MovieSearchParams>({
      query: (params) => ({
        url: "/movie",
        params: {
          ...params,
          api_key: apiKey,
        },
      }),
    }),
  }),
});

export default searchAPI;

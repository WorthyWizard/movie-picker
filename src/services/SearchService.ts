import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiEndpoints } from "@/api/apiEndpoints";
import { MoviesDataByPage } from "@/types/movie/data";
import { MovieSearchParams } from "@/types/movie/mutations";

const apiKey = import.meta.env.VITE_MOVIE_DB_API_KEY;

export const searchAPI = createApi({
  reducerPath: "searchAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: apiEndpoints.SEARCH_URL,
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

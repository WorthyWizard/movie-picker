import { useEffect, useMemo } from "react";
import { Pagination, Stack } from "@mui/material";

import { slideLeft } from "@/animations";
import { Grid, Hero, Movie, Search, Spinner } from "@/components";
import { useSearchParams } from "@/hooks/useSearchParams";
import { searchAPI } from "@/services";
import { getSortedMovies } from "@/utils/transform";
import { withAnimation } from "@/wrappers";

import s from "./styles.module.css";

const Page = () => {
  const [{ page, query }, setSearchParams] = useSearchParams<{
    query: string;
    page: string;
  }>();

  const {
    data: searchedMovies,
    isLoading: searchLoading,
    isSuccess: searchSuccess,
  } = searchAPI.useSearchMovieQuery(
    {
      query: query!,
      page: Number(page),
    },
    {
      skip: !query,
    }
  );

  useEffect(() => {
    if (searchSuccess) {
      window.scrollTo({ top: 350 });
    }
  }, [searchSuccess]);

  const filteredMovies = useMemo(
    () => getSortedMovies(searchedMovies?.results ?? []),
    [searchedMovies]
  );

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      page: String(value),
    }));
  };

  const onMovieSearch = (query: string) => {
    setSearchParams((prevSearchParams) => ({
      query,
      page: prevSearchParams.page ?? 1,
    }));
  };

  let content: JSX.Element | null = null;

  const moviesJSX = filteredMovies.map((movie) => (
    <Movie key={movie.id} movie={movie} />
  ));

  if (searchLoading) {
    content = <Spinner />;
  } else {
    content = <Grid elements={moviesJSX} />;
  }

  return (
    <div className={s.Search}>
      <Hero text="Go ahead and search" />
      <section className={s.SearchContent}>
        <Search onSearch={onMovieSearch} initialValue={query ?? ""} />
        <div className={s.SearchResult}>{content}</div>
        {searchedMovies?.results && (
          <Stack my={2} alignItems="center">
            <Pagination
              count={searchedMovies?.total_pages}
              page={Number(page)}
              onChange={handleChange}
            />
          </Stack>
        )}
      </section>
    </div>
  );
};

export const SearchPage = withAnimation(Page, slideLeft);

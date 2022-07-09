import { useEffect, useMemo, useRef } from "react";
import Hero from "../../components/Hero/Hero";
import Grid from "../../components/Grid/Grid";
import Search from "../../components/Search/Search";
import Spinner from "../../components/UI/Spinner/Spinner";
import Movie from "@/components/Movie/Movie";
import searchAPI from "@/services/SearchService";
import { getFilteredMovies } from "@/utils/transform/movieData";
import { useSearchParams } from "react-router-dom";
import s from "./SearchPage.module.css";
import { Motion } from "react-motion";
import { slideLeft } from "@/animations";

const SearchPage = () => {
  const [
    searchMovie,
    {
      data: searchedMovies,
      isLoading: searchLoading,
      isError: searchError,
      isSuccess: searchSuccess,
    },
  ] = searchAPI.useLazySearchMovieQuery();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    if (searchQuery) {
      searchMovie({ query: searchQuery }, true);
    }
  }, [searchQuery]);

  const filteredMovies = useMemo(
    () => getFilteredMovies(searchedMovies?.results ?? []),
    [searchedMovies]
  );

  const onMovieSearch = (query: string) => {
    setSearchParams({ query });
    searchMovie({ query }, true);
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
    <Motion defaultStyle={slideLeft.from} style={slideLeft.to}>
      {(style) => (
        <div className={s.Search} style={slideLeft.getStyle(style)}>
          <Hero text="Go ahead and search" />
          <section className={s.SearchContent}>
            <Search
              onSearch={onMovieSearch}
              searchQueryParam={searchQuery ?? ""}
            />
            <div className={s.SearchResult}>{content}</div>
          </section>
        </div>
      )}
    </Motion>
  );
};

export default SearchPage;

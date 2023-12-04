import { useEffect as effect, useState as state } from "react";
import { useSearchParams as searchParamsHook } from "react-router-dom";
import { fetchDataByQuery } from "api";
import { MovieList } from "components/MovieList/movielist";
import { MovieSearch } from "components/MovieSearchBar/moviesearchbar";

const MoviesComponent = () => {

  const [customMovieList, setCustomMovieList] = state([]);
  const [customSearchParams] = searchParamsHook(); 
  const customQuery = customSearchParams.get('searchQuery');

  effect(() => {
    if (!customQuery) return;
    fetchDataByQuery(customQuery)
      .then(response => {
        setCustomMovieList(response);
      })
      .catch(error => {
        alert('Try later');
        console.error(error);
      });
  }, [customQuery]);

    return (
      <>
      <MovieSearch/>
      <MovieList movies={customMovieList}/>
      </>
    );
  };

export default MoviesComponent;
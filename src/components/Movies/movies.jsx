import { useEffect as effect, useState as state } from "react";
import { useSearchParams as searchParamsHook } from "react-router-dom";
import { fetchDataByQuery } from "api";
import { MovieList, MovieSearchBar } from "components";

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
      <MovieSearchBar/>
      <MovieList movies={customMovieList}/>
      </>
    );
  };

export default MoviesComponent;
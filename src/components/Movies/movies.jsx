import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'api';
import MovieSearch from 'components/MovieSearchBar/moviesearchbar';
import MoveList from 'components/MovieList/movielist';
import { Loading } from 'components/Shared/shared.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const moviesName = searchParams.get('query') ?? '';

  const handleOnSubmit = query => {
    const changeParams = query !== '' ? { query } : {};
    setSearchParams(changeParams);
  };

  useEffect(() => {
    if (!moviesName) return;
    setLoading(true);

    fetchSearchMovies(moviesName).then(setMovies).finally(setLoading(false));
  }, [moviesName]);

  return (
    <>
      <MovieSearch value={moviesName} onSearch={handleOnSubmit} />
      {loading && <Loading />}
      {movies.length > 0 && <MoveList movies={movies} />}
    </>
  );
};

export default Movies;
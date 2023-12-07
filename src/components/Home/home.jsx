import { useEffect, useState } from 'react';
import MoveList from 'components/MovieList/movielist';
import { fetchTrending } from 'api';
import { HomeStyled } from './home.styled';

const HomePage = () => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  function getTrendingMovies() {
    setIsLoading(true);
    fetchTrending()
      .then(response => {
        setMovies(response)
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      {isLoading && "Loading , please wait..."}
      <HomeStyled>Trending today</HomeStyled>
      <MoveList movies={movies}/>
    </>
  );
};

export default HomePage;
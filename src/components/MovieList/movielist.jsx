import { useLocation } from 'react-router-dom';
import { MovLink, Item, MovList, MovImg, MovP } from './movielist.styled';

const MoveList = ({ movies }) => {
  const location = useLocation();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <MovList>
      {movies.map(movie => (
        <Item key={movie.id}>
          <MovLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovImg
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <MovP>{movie.title}</MovP>
          </MovLink>
        </Item>
      ))}
    </MovList>
  );
};
export default MoveList;
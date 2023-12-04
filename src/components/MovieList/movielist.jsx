import { useLocation } from 'react-router-dom';
import { MovLink, Item } from './movielist.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <Item key={id}>
          <MovLink to={`/movies/${id}`} state={{ from: location }}>
            <p>{title}</p>
          </MovLink>
        </Item>
      ))}
    </ul>
  );
};
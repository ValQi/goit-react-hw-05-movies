import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'api';
import { CastList, CastItem, CastP} from './cast.styled';

const Cast = () => {
  const [moviesCast, setMoviesCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then(setMoviesCast);
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <CastList>
        {moviesCast.map(({ id, name, profile_path }) => (
          <CastItem key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <CastP>{name}</CastP>
          </CastItem>
        ))}
      </CastList>
    </>
  );
};

export default Cast;
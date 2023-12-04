import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'api';
import { CastList, CastItem, CastImg } from './cast.styled';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieID } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchCredits(movieID)
      .then(response => {
        setMovieCast(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [movieID]);
  return (
    <>{isLoading && 'Loading, please wait'}
      <CastList>
        {movieCast.map(({ id, name, profile_path, character }) => (
          <CastItem key={id}>
            <CastImg
              src={`https://image.tmdb.org/t/p/w400/${profile_path}`}
              alt={name}/>
            <p><b>{name}</b></p>
            <p>{character}</p>
          </CastItem>
        ))}
      </CastList>
    </>
  );
};

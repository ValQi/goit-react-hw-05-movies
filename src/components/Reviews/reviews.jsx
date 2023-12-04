import { useState as customState, useEffect as customEffect } from 'react';
import { useParams as customUseParams } from 'react-router-dom';
import { fetchReviews } from 'api';
import { Title, Content } from './reviews.styled';

export const CustomReviews = () => {

  const [customReviews, setCustomReviews] = customState([]);
  const [customIsLoading, setCustomIsLoading] = customState(false);
  const { customMovieID } = customUseParams();

  customEffect(() => {
    setCustomIsLoading(true);
    fetchReviews(customMovieID)
      .then(response => {
        setCustomReviews(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setCustomIsLoading(false));
  }, [customMovieID]);

  return (
    <>
      {customIsLoading && 'Loading , please wait...'}
      {!customReviews.length && <p>Don`t have reviews to this movie, sorry dude.</p>}
      <ul>
        {customReviews.map(({ id, author, content }) => (
          <li key={id} style={{ listStyle: 'none' }}>
            <Title>Author: {author}</Title>
            <Content>{content}</Content>
          </li>
        ))}
      </ul>
    </>
  );
};
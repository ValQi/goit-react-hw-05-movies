import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cast } from './Cast/cast';
import { Shared } from './Shared/shared';
import { CustomReviews } from './Reviews/reviews';

const Home = lazy(() => import('./Home/home'));
const Movies = lazy(() => import('./Movies/movies'));
const MovieDet = lazy(() => import('./MovieDet/moviedet'));

export const App = () => {
  return (
<Routes>
<Route path="/" element={<Shared />}>
  <Route index element={<Home />} />
  <Route path="/movies" element={<Movies />} />
  <Route path="movies/:movieID" element={<MovieDet />}>
    <Route path="/movies/:movieID/reviews" element={<CustomReviews />} />
    <Route path="/movies/:movieID/cast" element={<Cast />} />
  </Route>
  <Route path="*" element={<Home />} />
</Route>
</Routes>
  );
};
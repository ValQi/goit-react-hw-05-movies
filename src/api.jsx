import axios from 'axios';

const API_KEY = "b88f7fe58464d3aa2950a20c075527ce";
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async () => {
    const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return data.results;
  };
  
  export const fetchMovie = async movieId => {
    const { data } = await axios.get(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return data;
  };
  
  export const fetchCast = async movieId => {
    const { data } = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data.cast;
  };
  
  export const fetchReviews = async movieId => {
    const { data } = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return data.results;
  };
  
  export const fetchSearchMovies = async query => {
    const { data } = await axios.get(
      `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    return data.results;
  };
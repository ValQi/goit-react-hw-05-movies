import axios from 'axios';

const API_KEY = "b88f7fe58464d3aa2950a20c075527ce";

axios.defaults.baseURL = 'https://api.themoviedb.org/?';

const params = { 
    trending: '/trending/movie/week',
    querySearch: '/search/movie',
    movieDetails: '/movie',
    movieCredits: '/credits',
    movieReviews: '/reviews',
};

export const fetchMovies = async (page = 1) => {
    const result = await axios.get(
        `${params.trending}?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
    );

    return result.data.results;
};

export const fetchDataByQuery = async (query, page = 1) => {
    const result = await axios.get(
        `${params.querySearch}?api_key=${API_KEY}&page=${page}&query=${query}&language=en-US&include_adult=false`
    );

    return result.data.results;
};

export const fetchCredits = async id => {
    const result = await axios.get(
        `/movie/${id}${params.movieCredits}?api_key=${API_KEY}&language=en-US`
    );

    return result.data.cast;
};

export const fetchDetails = async id => {
    const result = await axios.get(
        `${params.movieDetails}/${id}?api_key=${API_KEY}&language=en-US`
    );

    return result.data;
};

export const fetchReviews = async (id, page = 1) => {
    const result = await axios.get(
        `/movie/${id}${params.movieReviews}?api_key=${API_KEY}&language=en-US&page=${page}`
    );

    return result.data.results;
};
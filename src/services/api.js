import axios from 'axios';
const API_KEY = '5a45fdaf';

export const getMovies = async (query) => {
  const response = await axios.get(`http://www.omdbapi.com/?s=${query}&page=1&apikey=${API_KEY}`);
  return response.data || [];
};

export const getMovieDetails = async (imdbID) => {
  const response = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&page=1&apikey=${API_KEY}`);
  return response.data;
};
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHistory, setSelectedMovie } from '../../store/slices/moviesSlice';
import './style.scss'

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  const { history } = useSelector(
    (state) => state.movies
  );

  const handleMovieClick = (movie) => {
    const newHistory = [...history, movie];
    localStorage.setItem('movieHistory', JSON.stringify(newHistory));
    dispatch(setHistory(newHistory));
    dispatch(setSelectedMovie(movie));
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className='movie_item' key={movie.imdbID} onClick={() => handleMovieClick(movie)}>
      <img className='movie_item_img' src={movie.Poster} alt={movie.Title} />
      <p className='movie_item_title'>{movie.Title}</p>
      <p className='movie_item_year'>{movie.Year}</p>
    </div>
  );
}

export default MovieItem;
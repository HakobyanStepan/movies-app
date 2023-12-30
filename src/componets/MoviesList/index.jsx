import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from '../MovieItem';
import './style.scss';

const MoviesList = () => {
  const results = useSelector((state) => state.movies.results);

  return (
    <div className='movies_list'>
      {results && results.length > 0 ? (
        results.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <div className='no_results_message'>No results found.</div>
      )}
    </div>
  );
};

export default MoviesList;
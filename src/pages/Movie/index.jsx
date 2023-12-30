import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import Rating from '../../componets/Rating';
import BlueButton from '../../componets/BlueButton';
import './style.scss'

const Movie = () => {
  const location = useLocation();
  const movieDetails = location.state.movieDetails;
  const [details, setDetails] = useState(movieDetails);

  useEffect(() => {
    if (!details) {
      const fetchDetails = async () => {
        const newMovieDetails = await getMovieDetails(movieDetails.imdbID);
        setDetails(newMovieDetails);
      };

      fetchDetails();
    }
  }, [details, movieDetails.imdbID]);

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div className='movie_page'>
      <div className='movie_page_img' >
        <img src={details.Poster} alt={details.Title} />
      </div>
      <div className='movie_page_info' >
        <Link to={'/'} className='go_home_button'>
          <BlueButton>
            go back
          </BlueButton>
        </Link>
        <h2>{details.Title}</h2>
        <Rating rating={details.imdbRating} />
        <p>Genre: {details.Genre}</p>
        <p>Country: {details.Country}</p>
        <p>Language: {details.Language}</p>
        <p>{details.Plot}</p>
        <p>Year: {details.Year}</p>
        <p>Runtime: {details.Runtime}</p>
        <p>Cast: {details.Actors}</p>
        <p>Director: {details.Director}</p>
        <p>Writer: {details.Writer}</p>
        <p>Awards: {details.Awards}</p>
        <p>Box office: {details.BoxOffice}</p>
      </div>
    </div>
  );
};

export default Movie;
import React, { useEffect, useState } from 'react';
import { getMovieDetails } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import Rating from '../Rating';
import BlueButton from '../BlueButton';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedMovie } from '../../store/slices/moviesSlice';
import './style.scss';

const MovieModal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { selectedMovie } = useSelector(
    (state) => state.movies
  );
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleCloseModal = () => {
    dispatch(setSelectedMovie(null));
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const selectedMovieDetails = await getMovieDetails(selectedMovie.imdbID);
        setMovieDetails(selectedMovieDetails);
      } catch (error) {
        setError('Error fetching movie details');
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [selectedMovie.imdbID]);

  const handleClick = () => {
    navigate(`/movies/${selectedMovie.imdbID}`, { state: { movieDetails } });
    handleCloseModal()
    window.scrollTo(0, 0);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={handleCloseModal}>
          Close
        </button>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {movieDetails && (
          <>
            <h2 className='modal_title'>{movieDetails.Title}</h2>
            <p>{movieDetails.Plot}</p>
            <Rating rating={movieDetails.imdbRating} />
            <p>Cast: {movieDetails.Actors}</p>
            <BlueButton onClick={handleClick}>Go to Movie Page</BlueButton>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieModal;
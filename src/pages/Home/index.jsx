import React from 'react';
import Search from '../../componets/Search';
import MoviesList from '../../componets/MoviesList';
import MovieModal from '../../componets/MovieModal';
import BlueButton from '../../componets/BlueButton';
import HistoryList from '../../componets/HistoryList';
import { useDispatch, useSelector } from 'react-redux';
import { setResults, setShowHistory } from '../../store/slices/moviesSlice';
import './style.scss'

const Home = () => {
  const dispatch = useDispatch();
  const { selectedMovie, showHistory } = useSelector(
    (state) => state.movies
  );

  const handleResults = async (newMovie, query) => {
    dispatch(setShowHistory(false));
    if (!query.trim()) {
      dispatch(setResults([]));
      return;
    } else {
      dispatch(setResults(newMovie.Search));
    }
  };

  const handleShowHistory = () => {
    dispatch(setShowHistory(!showHistory));
  };

  return (
    <div className='home_page'>
      <h1 className='title'>Search your favorite movie</h1>
      <div className='search_container'>
        <Search onResults={handleResults} />
        <BlueButton onClick={handleShowHistory}>History</BlueButton>
      </div>
      {showHistory && <HistoryList />}
      <MoviesList />
      {selectedMovie && <MovieModal />}
    </div>
  );
};

export default Home;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHistory } from '../../store/slices/moviesSlice';
import './style.scss';

const HistoryList = () => {
  const dispatch = useDispatch();
  const { history } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    const storedHistory = localStorage.getItem('movieHistory');
    if (storedHistory) {
      dispatch(setHistory(JSON.parse(storedHistory)));
    }
  }, [dispatch]);

  const handleDeleteHistoryItem = (index) => {
    const updatedHistory = [...history];
    updatedHistory.splice(index, 1);
    localStorage.setItem('movieHistory', JSON.stringify(updatedHistory));
    dispatch(setHistory(updatedHistory));
  };

  return (
    <div className="history_container">
      {history.length > 0 ? (
        <div className="history_block">
          <h2>Movies History</h2>
          <div>
            {history.map((movie, index) => (
              <div key={index} className='history_item'>
                <p> {movie.Title} ({movie.Year}) </p>
                <button className='delete_button' onClick={() => handleDeleteHistoryItem(index)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h2 className='no_history_message'>History is empty.</h2>
      )}
    </div>
  );
};

export default HistoryList;
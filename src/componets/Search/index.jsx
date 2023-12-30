import React, { useEffect, useState } from 'react';
import { getMovies } from '../../services/api';
import { useDebounce } from '../../hooks/useDebounce';
import './style.scss'

const Search = ({ onResults }) => {
  const [query, setQuery] = useState('');
  const debouncedSearch = useDebounce(query, 500);

  useEffect(() => {
    const trimmedQuery = debouncedSearch.trim();
    if (trimmedQuery !== '') {
      const fetchResults = async () => {
        try {
          const results = await getMovies(trimmedQuery);
          onResults(results, trimmedQuery);
        } catch (error) {
          console.error("Error fetching results:", error);
        }
      };
      fetchResults();
    } else {
      onResults([], '');
    }
  }, [debouncedSearch]);


  const handleInputChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <input
      type="text"
      className='input_search'
      placeholder="Search movies by title"
      value={query}
      onChange={handleInputChange}
    />
  );
};

export default Search;
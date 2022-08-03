import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as moviesApi from '../../services/moviesApi';
import SearchForm from 'components/SearchForm/SearchForm';

function SearchMovies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovies, setSearcMovies] = useState([]);

  // console.log(searchMovies);
  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    moviesApi.getSearchMovies(searchQuery).then(res => {
      setSearcMovies([...res.results]);
    });
  }, [searchQuery]);

  const searchFormSubmit = newSearchQuery => {
    if (searchQuery !== newSearchQuery) {
      setSearcMovies([]);
      setSearchQuery(newSearchQuery);
    }
  };
  return (
    <>
      <SearchForm onSubmit={searchFormSubmit} />
      {searchMovies && (
        <ul>
          {searchMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default SearchMovies;

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from './SearchMovies.module.css';

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
        <ul className={style.list}>
          {searchMovies.map(movie => (
            <li key={movie.id} className={style.link}>
              <NavLink to={`movies/${movie.id}`} className={style.movie_title}>
                <img
                  src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
                  alt={movie.original_title}
                  className={style.img}
                />
                <p className={style.movie_titleaa}> {movie.original_title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default SearchMovies;

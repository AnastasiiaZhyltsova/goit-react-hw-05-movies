import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as moviesApi from '../services/moviesApi';

function MoviesView() {
  const [movies, setMovies] = useState([]);
  // console.log(movies);

  useEffect(() => {
    moviesApi.getTrending().then(res => {
      setMovies([...res.results]);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
      ;
    </>
  );
}

export default MoviesView;

import { useEffect, useState } from 'react';
import { NavLink, useParams, Outlet } from 'react-router-dom';
import * as moviesApi from '../../services/moviesApi';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    moviesApi.getMovieDetails(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img
            src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
            alt={movie.original_title}
          />
          <div>
            <h2>{movie.original_title}</h2>
            <p>{movie.release_date}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </p>
          </div>
        </>
      )}
      <hr />
      <div>
        <h5>Additional information</h5>
        <ul>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default MovieDetails;

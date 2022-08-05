import { useEffect, useState } from 'react';
import { NavLink, useParams, Outlet } from 'react-router-dom';
import * as moviesApi from '../../services/moviesApi';

import style from './MovieDetails.module.css';

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
        <div className={style.details}>
          <img
            src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
            alt={movie.original_title}
            className={style.img}
          />
          <div>
            <h2 className={style.title}>
              {movie.original_title}({movie.release_date.slice(0, 4)})
            </h2>
            <p>User Score: {movie.vote_average}</p>
            <h3 className={style.title}>Overview</h3>
            <p className={style.overview}>{movie.overview}</p>
            <h4 className={style.title}>Genres</h4>
            <ul className={style.genres}>
              {movie.genres.map(genre => (
                <li key={genre.id} className={style.genres_item}>
                  {genre.name},
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <hr />
      <div>
        <h5 className={style.title}>Additional information</h5>
        <ul className={style.list}>
          <li>
            <NavLink to="cast" className={style.item}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={style.item}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default MovieDetails;

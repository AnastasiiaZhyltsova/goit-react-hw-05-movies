import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../../services/moviesApi';
function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movie);
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
          <h2>{movie.original_title}</h2>
          <p>{movie.release_date}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.name}</p>
        </>
      )}
    </>
  );
}

export default MovieDetails;

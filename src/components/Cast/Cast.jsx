import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../../services/moviesApi';

function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(0);
  console.log(credits);
  useEffect(() => {
    moviesApi.getMovieCredits(movieId).then(res => {
      setCredits(res.cast);
    });
  }, [movieId]);
  return (
    <>
      {credits && (
        <ul>
          ({' '}
          {credits.map(credit => (
            <li key={credit.id}>
              <img
                src={'https://image.tmdb.org/t/p/w300' + credit.profile_path}
                alt={credit.original_name}
              />
              <h6>{credit.original_name}</h6>
              <p>Character: {credit.character}</p>
            </li>
          ))}
          )
        </ul>
      )}
    </>
  );
}

export default Cast;

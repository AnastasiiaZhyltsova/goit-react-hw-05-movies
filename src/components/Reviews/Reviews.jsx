import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../../services/moviesApi';
function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(0);
  console.log(reviews);
  useEffect(() => {
    moviesApi.getMovieReviews(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.length === 0 && (
          <p>We don't have any reviews for this movie </p>
        )}
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <h6>Author: {review.author}</h6>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Reviews;

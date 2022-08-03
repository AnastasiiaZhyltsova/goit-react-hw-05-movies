 const KEY = '364246c22cf976df1b7cad20117b583b';
  const BASE_URL = 'https://api.themoviedb.org/3';


export function getTrending() {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
}

export function getSearchMovies(searchQuery) {
  return fetch(`${BASE_URL}/search/movie?api_key=${KEY}&query=${searchQuery}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
}


export function getMovieDetails(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
    }
  })
}
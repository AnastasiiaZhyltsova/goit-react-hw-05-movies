import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import NotFoundView from './pages/NotFoundView/NotFoundView';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Cast from 'components/pages/Cast/Cast';
import Reviews from 'components/pages/Reviews/Reviews';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
}

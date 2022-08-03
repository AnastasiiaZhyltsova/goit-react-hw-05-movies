import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFoundView from './NotFoundView/NotFoundView';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
}

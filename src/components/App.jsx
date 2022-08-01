import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFoundView from './NotFoundView/NotFoundView';
import Home from './Home/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
}

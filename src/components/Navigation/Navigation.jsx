import { Link } from './Navigation.styled';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  );
}

export default Navigation;

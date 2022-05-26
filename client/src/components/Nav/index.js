import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <Link to={'/'}>
        <h1>Skyline <br />Counseling</h1>
      </Link>
      <nav>
        <Link to="/about">About Me</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Nav;

import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <Link to={'/'}>
        <h1 className="grow">Skyline Counseling</h1>
      </Link>
      <nav>
        <Link to="/services">
          Services
        </Link>
        <Link to="/contact" className="grow">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Nav;

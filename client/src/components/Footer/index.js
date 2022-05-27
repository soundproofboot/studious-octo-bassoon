import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>
        Copyright © <Link to={'/'}>Skyline Counseling</Link>{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;

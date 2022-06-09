import './Home.css';
import photo from '../../assets/professional-photo.jpg'

const Home = () => {

  return (
    <section className="main-section" id="home">
      <div id="image-container">
        <img src={photo} alt="Marie Humes" className="photo"></img>
      </div>

      <div id="intro-container">
        <h2 id="tagline">Maybe a tagline?</h2>
        <p id="intro-text">
          Tell your clients something about yourself. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Curabitur iaculis lobortis
          ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Ut auctor, ipsum at porttitor varius,
          urna felis ultrices eros, at facilisis urna nisl nec erat. Vestibulum
          aliquet arcu vitae lectus bibendum consectetur. Nunc eget.
        </p>
      </div>
    </section>
  );
};

export default Home;

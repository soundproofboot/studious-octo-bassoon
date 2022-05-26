import './App.css';

// react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import Nav from './components/Nav';
import Footer from './components/Footer';

// routed components
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

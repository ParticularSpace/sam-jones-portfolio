import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';


const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <main style={{flexGrow: 1}}>
          <Routes>
            <Route path="sam-jones-portfolio/" element={<About />} />
            <Route path="sam-jones-portfolio/about" element={<About />} />
            <Route path="sam-jones-portfolio/portfolio" element={<Portfolio />} />
            <Route path="sam-jones-portfolio/contact" element={<Contact />} />
            <Route path="sam-jones-portfolio/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};




export default App;

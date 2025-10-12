import React from 'react';
import Header from './components/Header.jsx';
import About  from './components/Aboutus.jsx';
import Feature from './components/Featurecard.jsx';
import ResearchAndGallery from './components/ResearchAndGallery.jsx';
import ReviewAndBlog from './components/ReviewAndBlog.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Feature />
      <ResearchAndGallery />
      <ReviewAndBlog />
      <Footer />
    </div>
  );
}

export default App;
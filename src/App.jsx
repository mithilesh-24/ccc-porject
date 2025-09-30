import React from 'react';
import Hero from './components/Hero';
import './index.css';
import ServiceCard from './components/ServiceCard';
import './components/product';
import Product from './components/product';
import FeaturesSection from './components/FeaturesSection';
import Gallery from  './components/GallerySection';
import TestimonialsAndBlog from './components/TestimonialsAndBlog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <ServiceCard />
      <Product />
      <FeaturesSection />
      <Gallery />
      <TestimonialsAndBlog />
      <Footer />
    </div>
  );
}

export default App;
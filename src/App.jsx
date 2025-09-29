import React from 'react';
import Hero from './components/Hero';
import './index.css';
import ServiceCard from './components/ServiceCard';
import './components/product';
import Product from './components/product';
import FeaturesSection from './components/FeaturesSection';
function App() {
  return (
    <div className="App">
      <Hero />
      <ServiceCard />
      <Product />
      <FeaturesSection />
    </div>
  );
}

export default App;
import React from 'react';
import Hero from './components/Hero';
import './index.css'; // Don't forget global styles
import ServiceCard from './components/ServiceCard';
function App() {
  return (
    <div className="App">
      <Hero />
      <ServiceCard />
    </div>
  );
}

export default App;
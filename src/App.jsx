import React from 'react';
import Header from './components/Header.jsx';
import About  from './components/Aboutus.jsx';
import Feature from './components/Featurecard.jsx';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Feature />
    </div>
  );
}

export default App;
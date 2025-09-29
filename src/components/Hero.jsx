import React, { useState } from 'react'; 
import Header from './Header';
import '../styles/hero.css';

import slide1Image from '../assets/home_image.png';
import slide2Image from '../assets/home_image.png';
import slide3Image from '../assets/Feature_image.png';

const heroData = [
  {
    image: slide1Image,
    heading: <>Nature's Beauty Delivered to You</>,
    text: "Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers that will bring a touch of nature to your home!",
  },
  {
    image: slide2Image,
    heading: <>Fresh Blooms For Every Occasion</>,
    text: "Explore our curated collection of vibrant bouquets, perfect for birthdays, anniversaries, or just because.",
  },
  {
    image: slide3Image,
    heading: <>Easy-Care House Plants</>,
    text: "Bring the outdoors in with our stunning selection of house plants that are perfect for beginners and experts alike.",
  },
];


export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = heroData[activeSlide];

  const heroStyles = {
    backgroundImage: `url(${currentSlide.image})`,
  };

  return (
    <section className="hero-section" style={heroStyles}>
      <Header />
      
      <div className="hero-content">
        <div key={activeSlide} className="hero-inner">
          <h1>{currentSlide.heading}</h1>
          <p>{currentSlide.text}</p>
      </div>
        <div className="hero-buttons">
          <button className="book-now-btn">Book Now</button>
          <button className="watch-video-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Video
          </button>
        </div>
      </div>

      <div className="side-nav">
        {heroData.map((slide, index) => (
          <span
            key={index}
            className={activeSlide === index ? 'active' : ''}
            onClick={() => {
              return setActiveSlide(index)}}
          >
            0{index + 1}
          </span>
        ))}
      </div>
    </section>
  );
}
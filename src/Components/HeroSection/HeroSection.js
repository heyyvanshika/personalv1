import React from 'react';
import '../HeroSection/HeroSection.css'; 
import arrowhero from '../../Assets/arrowhero.svg'

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Hi, I'm Aarush.<span className='asterik'>*</span></h1>
      <h2>Developer, Designer and more.</h2>
      <div className='heroBottom'>
      <img src={arrowhero} alt="Arrow" className="arrow-hero" />
      <p className='haha'>* Actually, I’m a website. <br/>But I was built by Aarush.</p>
      </div>
    </div>
  );
};

export default HeroSection;

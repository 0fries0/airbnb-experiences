import React from 'react';
import photo_grid from '../images/photo-grid.png'
import '../components/Hero.css'

function Hero() {
  return <div className='hero'>
      <img className = "hero--photo"src = {photo_grid}/>
      <h1 className = "hero--header">Online Experiences</h1>
      <p className = "hero--para">Join unique interactive activities led by 
        one-of-a-kind hosts—all without leaving home.</p>
  </div>;
}

export default Hero;

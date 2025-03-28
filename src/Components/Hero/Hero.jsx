import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero_left">
        <p>NEW ARRIVALS ONLY</p>
        <h1>new<br/>collections<br/>for everyone</h1>
        <button>Latest collection</button>
      </div>
      <div className="hero_right">
        <img height={500} src={hero_image}></img>
      </div>
    </div>
  )
}

export default Hero

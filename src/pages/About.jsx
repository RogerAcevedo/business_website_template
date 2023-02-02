import React from 'react'

// IMPORT PICTURES
import AboutUs from '../assets/about.png'

// IMPORT CSS FILES
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div 
        className='aboutTop'
        style={ {backgroundImage: `url(${AboutUs})` }}>
        </div>

        <div className='aboutBottom'></div>
        <h1> About Us</h1>   
          <h3>
          "Our smoke shop, founded in the heart of the San Fernando Valley in Los Angeles, California, offers a wide selection of premium smoking products and accessories. 
          With over [number of years] years of experience in the industry, we have established a reputation for providing exceptional customer service and high-quality products at competitive prices.
          From beginner to connoisseur, our knowledgeable staff is ready to assist you in finding the perfect item to fit your smoking needs. Visit us today and experience the difference at [Smoke Shop Name]."
        </h3>
    </div>
  )
}

export default About
import React from 'react';
import './showcase.css';
import Navbar from './Navbar';


const Showcase = () => {
  return (
    <div className="showcase">
        <Navbar />
        <div className="showcase__main__container">
          <div className="showcase__main__text">
            <h1>Programming Courses For</h1> 
            <h1 className='highlighted'>Those Who Want to Grow</h1>
            <p>Our courses are designed to accommodate all skill levels. Take your time, pause, rewind, and revisit concepts whenever you need to.</p>

            <button className='showcase__main__btn'>Get Started</button>
          </div>

          <div className="showcase__image">
            <img src="/img/img1.svg" alt="" />
          </div>
        </div>
        {/* <img src="/img/moon.png" alt="" /> */}

    </div>
  )
}

export default Showcase
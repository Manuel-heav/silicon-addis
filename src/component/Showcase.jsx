import React from 'react'
import './showcase.css'
import Navbar from './Navbar'
const Showcase = () => {
  return (
    <div className="showcase">
        <Navbar />
        <div className="showcase__main__conatainer">
          <div className="showcase__main__text">
            <h1>Programming Courses For Those Who Want to Grow</h1>
            <p>Our courses are designed to accommodate all skill levels. Take your time, pause, rewind, and revisit concepts whenever you need to.</p>
          </div>

          <div className="showcase__image">

          </div>
        </div>
        {/* <img src="/img/moon.png" alt="" /> */}

    </div>
  )
}

export default Showcase
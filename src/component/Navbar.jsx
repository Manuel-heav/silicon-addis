import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <h1>SILICON ADDIS</h1>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>Youtube</li>
                    <li>Blog</li>
                </ul>
            </div>
            <button className="button">Get Started</button>
        </div>
    </div>
  )
}

export default Navbar
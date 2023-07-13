import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="links">
                <h1>SILICON ADDIS</h1>
                <ul>
                    <li>Home</li>
                    <li>Studio</li>
                    <li>Works</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="icons">
                <button className="button">Hire Now</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
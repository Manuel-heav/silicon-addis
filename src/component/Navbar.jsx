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
            <div>
              <button className="button btn__login">Login</button>
              <button className="button btn__signup">Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react';
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const openMenu = (e) => {
    e.preventDefault();
    const nav = document.querySelector('nav');
    nav.style.display = 'block'
  }

  const closeMenu = (e) => {
    e.preventDefault();
    const nav = document.querySelector('nav');
    nav.style.top = '-100%';
  }
  return (
    <div className='navbar'>
        <div className="container">
            <h1>SILICON ADDIS</h1>
            <GiHamburgerMenu className="open" onClick={openMenu}/>
            <nav>
            <AiOutlineClose className="close" onClick={closeMenu}/>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>Youtube</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="nav__btn__container">
              <button className="button btn__login">Login</button>
              <button className="button btn__signup">Sign Up</button>
            </div>
            </nav>
            {/* <div className="mobile_nav">
            <AiOutlineClose className="close" onClick={closeMenu}/>
              <div className="mobile_links">
                  <ul>
                      <li>Home</li>
                      <li>Courses</li>
                      <li>Youtube</li>
                      <li>Blog</li>
                <button className="button btn__signup">Sign Up</button>
                  </ul>
              </div>
            </div> */}
        </div>
    </div>
  )
}

export default Navbar
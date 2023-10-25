import React, { useState } from 'react';
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";


const MobileMenu = () => {
  return (
    <div className='mobile-menu'>
      <a href='#home'>Home</a>
      <a href='#news'>Youtube</a>
      <a href='#shop'>Blog</a>
      <button className="button btn__login">Login</button>
      <button className="button btn__signup">Sign Up</button>
    </div>
  );
};
const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  return (
    <div className='navbar'>
          <div className="container">
            <h1>SILICON ADDIS</h1>
            <nav>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>Youtube</li>
                    <li>Blog</li>
                </ul>
                <div className="nav__btn__container">
              <button className="button btn__login">Login</button>
              <button className="button btn__signup">Sign Up</button>
            </div>
            </div>
            <GiHamburgerMenu className="open" onClick={toggleMobileMenu}/>
            </nav>
            {isShown && <MobileMenu />}
              {isShown && (
                <AiOutlineClose className="close" onClick={toggleMobileMenu}/>
            )}
        </div>
    </div>
  )
}

export default Navbar



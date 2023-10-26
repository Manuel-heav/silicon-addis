import React from 'react';
import './popular.css';
import { AiOutlineArrowRight } from "react-icons/ai";
const Popular = () => {

  return (
    <div className='popular'>
        <div className="content__container">
          <div className="text_container">
            <p>Lorem ipsum dolor sit amet.</p>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, iure.</h1>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore sequi suscipit, blanditiis repellendus ea earum.</h4>
            <div className="link_btn_container">
              <a href="#">Check our youtube</a>
              <AiOutlineArrowRight />
            </div>
          </div>

          <div className="img_container">
            <img src="/img/img4.svg" alt="" />
          </div>
        </div>
        
    </div>
  )
}

export default Popular
import React from 'react'
import "./latest.css"
import { FaReact } from "react-icons/fa6";


const Latest = () => {
  return (
    <div className='latest'>
        <div className="latest__container">
          <div className="latest__container__left">
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, dignissimos?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quod ea delectus molestias eligendi ab quia repudiandae rerum laboriosam aliquam error eveniet, ad voluptates quo saepe quam explicabo earum iste?</p>
          </div>

          <div className="latest__container__right">
            <div className="right__cards">
              <div className="card">
                <h2>
                 Lorem ipsum, dolor sit amet consectetur adipisicing.
                </h2>
                <FaReact className="card__icon"/>
              </div>

              <div className="card">
              <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing.
                </h2>
                <FaReact className="card__icon"/>
              </div>

              <div className="card">
              <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing.
                </h2>
                <FaReact className="card__icon"/>
              </div>

              <div className="card">
              <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing.
                </h2>
                <FaReact className="card__icon"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Latest
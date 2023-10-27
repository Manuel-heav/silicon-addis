import React from 'react'
import "./notify.css"

const Notify = () => {
  return (
    <>
    <div className="notify">
        <div className="notify__container">
            <h1>Notify Me Of New Courses</h1>
            <form className="notify_input_container">
                <input type="email" placeholder='Enter Email...' />
                <button type='submit'>Notify</button>
            </form>
        </div>
    </div>

        <div className="donation">
          <div className="donation_container">
              <h1>Buy me a coffee</h1>
              <p>Support my channel and my cause by making a donation.</p>
              <a href="">50 ETB</a>
              <a href="">100 ETB</a>
              <a href="">1000 ETB</a>
              <a href="">5000 ETB</a>
          </div>
        </div>
    </>
  )
}

export default Notify
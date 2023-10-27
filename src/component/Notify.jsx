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
          Donation
        </div>
    </>
  )
}

export default Notify
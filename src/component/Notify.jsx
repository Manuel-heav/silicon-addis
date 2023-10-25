import React from 'react'
import "./notify.css"

const Notify = () => {
  return (
    <div className="notify">
        <div className="notify__container">
            <h1>Notify Me Of New Courses</h1>
            <div className="notify_input_container">
                <input type="text" />
                <button>Notify</button>
            </div>
        </div>
    </div>
  )
}

export default Notify
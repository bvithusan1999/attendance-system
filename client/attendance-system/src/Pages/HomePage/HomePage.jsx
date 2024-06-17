import React from 'react'
import './HomePage.css'

const HomePage = () => {
  return (
      <div className='HomePage'>
          <div className="logout-button">
              <button className='logout-but button'>Logout</button>
          </div>
          <div className="welcome-message">
              <span>Welcome to Attendance System Web Application</span>
          </div>
    </div>
  )
}

export default HomePage
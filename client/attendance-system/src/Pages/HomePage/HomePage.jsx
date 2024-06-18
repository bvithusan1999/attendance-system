import React from 'react'
import './HomePage.css'
import { logout } from '../../Actions/LoginAction';
import { useDispatch, useSelector } from 'react-redux';


const HomePage = () => {

    const dispatch = useDispatch();
    const handleLogOut = ()=>{
        dispatch(logout())

    }
    
  return (
      <div className='HomePage'>
          <div className="logout-button">
              <button className='button logout-but' onClick={handleLogOut}>Logout</button>
              
          </div>
          <div className="welcome-message">
              <span>Welcome back!</span>
              <span>You are logged in to the application. Don't forget to log out of the application after you completed your works, to protect your privacy.</span>
          </div>

    </div>
  )
}

export default HomePage
import React from 'react'
import './LoginPage.css'

const LoginPage = () => {
  return (
      <div className='LoginPage'>
          
    {/* left side */}

      <div className="a-left">

        <div className="Webname">
          <h1>Attendance System</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* right form side */}

      <div className="a-right">
        <form className="infoForm authForm" >
          <h3>Login</h3>
          

          <div>
            <input
              required
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              
            />
          </div>
          <div>
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
             
            />
            
          </div>

          
          <div>
            
            <button
              className="button infoButton"
              
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage
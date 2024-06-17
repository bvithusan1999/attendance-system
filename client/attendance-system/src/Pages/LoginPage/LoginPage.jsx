import React, { useState } from 'react'
import './LoginPage.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn} from "../../Actions/LoginAction.js";



const LoginPage = () => {
    const initialState = {
        username: "",
        password: "",
    };
    const [data, setData] = useState(initialState);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    const resetForm = () => {
        setData(initialState);
    
    };
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        dispatch(logIn(data, navigate));
        
  };
    
  return (
      <div className='LoginPage'>
          
    

      <div className="a-left">

        <div className="Webname">
          <h1>Attendance System</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      

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
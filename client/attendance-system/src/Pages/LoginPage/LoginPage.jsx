import React, { useState } from "react";
import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn, logout } from "../../Actions/LoginAction.js";

const LoginPage = () => {
  const initialState = {
    username: "",
    password: "",
  };
  const [data, setData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.loginReducer.error);
  const errorMsg = useSelector((state) => state.loginReducer.errorMsg);

  const resetForm = () => {
    setData(initialState);
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(logIn(data, navigate));
      console.log(data);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="LoginPage">
      <div className="a-left">
        <div className="Webname">
          <h1>Attendance System</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>Login</h3>
          {/* {error &&  <span className='error-msg'>* Please check the username or password *</span>} */}
          {errorMsg}
          <div>
            <input
              required
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <button className="button infoButton" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

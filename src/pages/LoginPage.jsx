import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
const navigate = useNavigate();

  return (

    <div className='login-page'>
      <div className='login-container'>
        <h2>Welcome Back!</h2>
        <p>Log in to continue your journey</p>
        <form className='login-form'>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />

          <button type="submit" className="login-btn">Log In</button>
        </form>
        <p className='signup-link'>Don’t have an account? 
        <button className='signup-btn' onClick={() => navigate('/signup')}>Sign up</button></p>
      </div>
    </div>
  );
};

export default LoginPage;

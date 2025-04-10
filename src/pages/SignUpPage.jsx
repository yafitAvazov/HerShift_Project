import React from 'react';
import './SignUpPage.css';


const SignUpPage = () => {
  return (
    <div className='signup-page'>
      <div className='signup-container'>
        <h2>Sign Up</h2>
        <p>Join To Start Your journey!</p>
        <form className='signup-form'>
        <label htmlFor="Name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label htmlFor="LastName">Last Name</label>
          <input type="text" id="last-name" placeholder="Enter your last name" />

          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter a username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />

          <button type="submit" className="signup-btn-enter">Sign In</button>

        </form>
      
      </div>
    </div>
  );
};

export default SignUpPage;

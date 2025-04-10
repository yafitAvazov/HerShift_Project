import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
const navigate = useNavigate();
  return (
    <nav className="navbar">
  <ul className="navbar-left">
    <li><button className="btn-about" onClick={() => navigate('/about')}>About</button></li>
    <li><button className="btn-about" onClick={() => navigate('/roadmap')}>Roadmap</button></li>
  </ul>

  <div className="navbar-center">
    <button className="logo" onClick={() => navigate('/')}>HerShift</button>
  </div>

  <ul className="navbar-right">
    <li><button className="btn" onClick={() => navigate('/login')}>Log in</button></li>
  </ul>
</nav>

  )
}

export default Navbar

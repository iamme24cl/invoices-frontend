import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <nav id="navbar">
        <div className="logo">
          <img src="/Photo_1619833647159_Processed.png" alt="user" />
        </div>
        <ul className="nav-li">
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/accounts/new">Sign Up</Link></li>
        </ul>
      </nav>
    </div>    
  )
}

export default NavBar;
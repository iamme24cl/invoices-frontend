import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav id="navbar">
        <div className="logo">
          <img src="https://randomuser.me/api/portraits/men/9.jpg" alt="user" />
        </div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/accounts">Accounts</Link></li>
          <li><Link to="/accounts/new">Sign Up</Link></li>
        </ul>
      </nav>
    </div>    
  )
}

export default NavBar
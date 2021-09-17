import React from 'react';
import { connect } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import { logout } from '../actions/logout';
import './NavBar.css';

const NavBar = (props) => {
  let history = useHistory();

  const handleLogout = (id) => {
    props.logout();
    history.push("/")
    localStorage.clear();
  }

  return (
    <div>
      <nav id="navbar">
        <div className="logo">
          <img src="/Photo_1619833647159_Processed.png" alt="user" />
        </div>
        {props.loggedIn === false &&
          <ul className="nav-li">
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/accounts/new">Sign Up</Link></li>
          </ul>
        }
        {props.loggedIn &&
          <ul className="nav-li">
            <li><Link to='/'>Home</Link></li>
            <li><button className="btn btn-danger" onClick={handleLogout}>Logout</button></li>
          </ul>
        }
        
      </nav>
    </div>    
  )
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    account: state.account
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: (id) => dispatch(logout(id))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
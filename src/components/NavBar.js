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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link id="logo" className="navbar-brand" to="/">INVOICES</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {props.loggedIn === false &&
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/accounts/new">Sign Up</Link>
              </div>
            }
            {props.loggedIn &&
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" onClick={handleLogout}>Logout</Link>
              </div>
            }
\         </div>
        </div>
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
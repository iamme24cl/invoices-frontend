import React from 'react';
import { connect } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import { logout } from "../store/utils/thunkCreators.js"
import './NavBar.css';

const NavBar = (props) => {
  let history = useHistory();
  const { account, logout } = props;

  const handleLogout = (id) => {
    logout();
    history.push("/");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link id="logo" className="navbar-brand" to="/">INVOICES</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {!account.id &&
              <div className="navbar-nav">
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/accounts/new">Sign Up</Link>
              </div>
            }
            {account.id &&
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to={`/accounts/${props.account.id}/invoices`}>My Invoices</Link>
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
    account: state.account
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: (id) => dispatch(logout(id))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
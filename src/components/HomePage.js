import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAccount } from '../actions/fetchAccount'
import './HomePage.css';

class HomePage extends React.Component {
  
  handleLogin = () => {
    const userData = {
      email: "cool@mail.com",
      password: "testing"
    }
    this.props.fetchAccount(userData);
  }

  render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col home-img"></div>
          </div>
          <div className="row">
            <div className="col home-page-buttons my-3">
              <button onClick={this.handleLogin} className="btn btn-primary mx-3">Login</button>

              <Link to="/accounts/new" className="btn btn-primary mx-3">Sign Up</Link>

              <span className="mx-3">OR USE</span>

              <button className="btn btn-success m-x-3">Demo Account</button>
            </div>
          </div>
        </div>
      )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: (userData) => dispatch(fetchAccount(userData))
  }
}


export default connect(mapDispatchToProps)(HomePage);
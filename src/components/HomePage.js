import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchAccount } from '../actions/fetchAccount'
import './HomePage.css';

class HomePage extends React.Component {
  
  handleDemoLogin = () => {
    const userData = {
      email: "cool@mail.com",
      password: "testing"
    }
    this.props.fetchAccount(userData);
    setTimeout(() => {
      if (Object.keys(this.props.account).length !== 0) {
        this.props.history.push(`/accounts/${this.props.account.id}/invoices`)
      } else {
        this.props.history.push('/login')
      }
    }, 1000)
  }

  render() {
    const loggedIn = this.props.loggedIn;

      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col home-img"></div>
          </div>
          <div className="row">
            {loggedIn === false &&
              <div className="col home-page-buttons my-3">
                <Link to="/login" className="btn btn-primary mx-3">Login</Link>

                <Link to="/accounts/new" className="btn btn-primary mx-3">Sign Up</Link>                
              </div>
            }
          </div>
          <div className="row">
            <div className="col home-page-buttons">
              <h4 id="home-page">Or Use</h4>
            </div>
          </div>
          <div className="row">
            <div className="col home-page-buttons">
              <button onClick={this.handleDemoLogin.bind(this)} className="btn btn-success m-x-3">Demo Account</button>
            </div>
          </div>
        </div>
      )
  }
}



export default connect(null, {fetchAccount})(HomePage);
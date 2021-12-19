import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "./store/utils/thunkCreators";

import "./Login.css";


const Login = (props) => {
  const { account, login } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    await login({ email, password })
  }

  if (account && account.id) {
    return <Redirect to={`accounts/${account.id}/invoices`} />
  }

  return (
    <div className="container login-container">
      <div className="login-form p-5 rounded">
          <h4 className="text-center mb-3">Login</h4>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="mb-2" htmlFor="email">Email</label>
              <input 
                type="text"
                id="email" 
                placeholder="Email" 
                value={email}
                onChange={e => setEmail(e.target.value)} 
                className="form-control mb-2"
              />
            </div>
            <div className="form-group">
              <label className="mb-2" htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password"
                placeholder="Password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                className="form-control mb-5"
              />
            </div>
            <div className="form-group">
              <input type="submit" className="cta-btn btn btn-dark submit-btn"/>    
            </div>
          </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.account
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
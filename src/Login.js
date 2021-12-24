import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "./store/utils/thunkCreators";


const Login = (props) => {
  const { account, login } = props;
  const [email, setEmail] = useState("cool@mail.com");
  const [password, setPassword] = useState("testing");

  const handleLogin = async (event) => {
    event.preventDefault();
    await login({ email, password })
  }

  if (account && account.id) {
    return <Redirect to="/" />
  }

  return (
    <div style={{minHeight: "80vh"}} className="flex justify-center items-center">
      <div className="w-4/5 sm:w-2/4 lg:w-1/4">
        <h3 className="text-center text-lg font-semibold">Use the demo account below</h3>
        <p className="text-center text-xs sm:text-sm mb-3">Or use your credentials if you have an account</p>
        <form onSubmit={handleLogin} className="bg-gray-200 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="email" 
              name="email" 
              type="text" 
              placeholder="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              name="password" 
              type="password" 
              placeholder="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-gray-400 hover:bg-gray-500  text-gray-800 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
            <a className="hidden sm:inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
              Forgot Password?
            </a>
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
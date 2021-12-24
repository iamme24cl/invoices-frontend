import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { postAccount } from "./store/utils/thunkCreators";

const Signup = (props) => {
  const { account, postAccount } = props;
  const [accountName, setAccoutName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    await postAccount({
      account: {
        accountname: accountName,
        email,
        address,
        password
     }
    })
  }

  if (account && account.id) {
    return <Redirect to="/" />
  }

  return (
    <div style={{minHeight: "80vh"}} className="flex justify-center items-center mt-4">
      <div className="w-4/5 sm:w-2/4 lg:w-1/4">
        <h3 className="text-center text-lg mb-4 font-semibold">Sign up for an Account</h3>

        <form onSubmit={handleSignup} className="bg-gray-200 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account-name">
                Account Name
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="account-name" 
                type="text" 
                placeholder="Account name" 
                value={accountName}
                onChange={e => setAccoutName(e.target.value)}
              />
            </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="email" 
              type="text" 
              placeholder="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <textarea 
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="address" 
              placeholder="Street, City, State, Zip Code" 
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              type="password" 
              placeholder="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.account,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postAccount: (body) => {
      dispatch(postAccount(body));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
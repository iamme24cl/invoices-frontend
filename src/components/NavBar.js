import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import { logout } from "../store/utils/thunkCreators.js";
import { clearOnLogout } from "../store/index";

const NavBar = (props) => {
  let history = useHistory();
  const { account, logout } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = (id) => {
    logout();
    history.push("/");
  };

  return (
    <nav className="bg-gray-300 shadow-xl sm:flex sm:justify-between sm:px-5 text-black no-print">
      <div className="flex items:center justify-between px-5 py-3">
        <div>
          <Link className="cursor-pointer font-bold" to="/">INVOICES</Link>
        </div>
        <div className="sm:hidden">
          <button type="button" onClick={toggleNavbar} className="text-black hover:gray-500 focus:text-gray-500 focus:outline-none block">
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
              {isOpen && <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>}
              {!isOpen && <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>}
            </svg>
          </button>
        </div>
      </div>
      <div className={`px-3 pt-2 pb-4 sm:flex sm:items-center ${isOpen ? "block": "hidden"}`}>
        {!account.id && 
          <>
            <Link to="/login" className="block px-3 py-1 text-black  font-semibold rounded hover:bg-gray-400">Login</Link>
            <Link to="/signup" className="block px-3 py-1 text-black  font-semibold rounded hover:bg-gray-400">Signup</Link>
          </>  
        }
        {account.id &&
          <> 
            <Link to="/" className="block px-3 py-1 text-black  font-semibold rounded hover:bg-gray-400">Home</Link>
            <button onClick={handleLogout} className="block px-3 py-1 text-black  font-semibold rounded hover:bg-gray-400">Logout</button>
          </>
        }
      </div>
    </nav>  
  )
}

const mapStateToProps = state => {
  return {
    account: state.account
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: (id) => {
      dispatch(logout(id));
      dispatch(clearOnLogout());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
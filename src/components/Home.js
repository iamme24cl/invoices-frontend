import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from "react-redux";

import { Invoices } from "../components/invoice"

const Home = (props) => {
  const { account, invoices } = props;
  
  if (!account.id) {
    return <Redirect to="/login" />
  }

  return (
    <>
    <div className='flex justify-center sm:justify-end p-6 sm:mr-6 sm:mr-28'><Link to="/invoices/new" className='bg-gray-400 hover:bg-gray-500 py-2 px-3 rounded-md w-full sm:w-28 text-center'>New Invoice</Link></div>
    <div className='flex flex-col items-center'>
      <div style={{minHeight: "70vh"}} className='p-4 w-11/12 sm:w-8/12 md:w-6/12 border-black bg-gray-200 rounded-md'>
        <Invoices invoices={invoices} />
      </div>
    </div>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    account: state.account,
    invoices: state.invoices
  }
};

export default connect(mapStateToProps, null)(Home);
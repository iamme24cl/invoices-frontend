import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAccount, fetchInvoices } from "./store/utils/thunkCreators";

import Login from "./Login";
import Signup from "./Signup";
import { Home } from "./components";
import { InvoiceDetails, InvoiceInput, InvoiceEdit } from "./components/invoice";

const Routes = (props) => {
  const { account, fetchAccount, fetchInvoices } = props;
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchAccount();
  }, [fetchAccount]);

  useEffect(() => {
    if (account.error) {
      if (typeof account.error === "string") {
        setErrorMessage(account.error)
      } else {
        setErrorMessage("Internal Server Error, Please try again");
      }
    } else {
      setErrorMessage("");
    }
  }, [account.error]);

  useEffect(() => {
    fetchInvoices(account.id);
  }, [fetchInvoices, account.id]);

  
  if (props.account.isFetching) {
    return <div className="text-center mt-32">Loading....</div>
  }

  return (
    <>
      {errorMessage !== "" && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center" role="alert">
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route 
          exact
          path="/"
          render={(routerProps) => (props.account && props.account.id ? <Home /> : <Login />)}
        />
        <Route path="/home" component={Home} />
        <Route path="/invoices/new" component={InvoiceInput} />
        <Route path="/invoices/:id/edit" component={InvoiceEdit} />
        <Route path="/invoices/:id" component={InvoiceDetails} />
      </Switch>
    </>
  )
  
};

const mapStateToProps = (state) => {
  return {
    account: state.account,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccount: () => {
      dispatch(fetchAccount());
    },
    fetchInvoices: (accountId) => {
      dispatch(fetchInvoices(accountId));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
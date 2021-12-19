import React, { useEffect, useReducer, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAccount } from "./store/utils/thunkCreators";

import Login from "./Login";
import { InvoiceList } from "./components/invoice";

const Routes = (props) => {
  const { account, fetchAccount } = props;
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
  }, [account.error])

  
  if (props.account.isFetching) {
    return <div className="">Loading....</div>
  }

  return (
    <>
      {errorMessage !== "" && (
        <div className="text-center bg-danger p-3" role="alert">
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}
      <Switch>
        <Route path="/login" component={Login} />
        <Route 
          exact
          path="/"
          render={(routerProps) => (props.account && props.account.id ? <InvoiceList /> : <Login />)}
        />
      </Switch>
    </>
  )
  
};

const mapStateToProps = (state) => {
  return {
    account: state.account
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccount: () => {
      dispatch(fetchAccount());
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
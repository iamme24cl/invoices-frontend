import React from 'react'; 
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { checkLoginStatus } from '../actions/checkLoginStatus';
import { fetchAccount } from '../actions/fetchAccount';
import AccountInput from '../components/account/AccountInput';
import AccountEdit from '../components/account/AccountEdit';
import Account from '../components/account/Account';
import HomePage from '../components/HomePage';
import './AccountsContainer.css';


class AccountsContainer extends React.Component {

  componentDidMount() {
    const userData = {
      email: "cool@mail.com",
      password: "testing"
    }
    // this.props.fetchAccount(userData);
    this.props.checkLoginStatus();
    setTimeout(() => {
      if (Object.keys(this.props.account).length !== 0) {
        this.props.history.push(`/accounts/${this.props.account.id}/invoices`)
      } else {
        this.props.history.push('/login')
      }
    }, 1000)
  }

  render() {
   
    return (
      <div onClick={this.props.onClick} className="container">
          <Switch>
            <Route 
              path='/accounts/new' 
              component={AccountInput}
            />

            <Route 
              path='/accounts/:id/edit' 
              render={(routerProps) => <AccountEdit {...routerProps} account={this.props.account}/>}
            />

            <Route 
              path='/accounts/:id' 
              render={(routerProps) => <Account {...routerProps} account={this.props.account} />}
            />

            <Route 
              path='/login' 
            />

            <Route 
              path="/" 
              component={HomePage} 
            />
          </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    account: state.account
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: (id) => dispatch(fetchAccount(id)),
    checkLoginStatus: () => dispatch(checkLoginStatus())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountsContainer));
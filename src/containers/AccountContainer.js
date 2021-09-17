import React from 'react'; 
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { checkLoginStatus } from '../actions/checkLoginStatus';
import { fetchAccount } from '../actions/fetchAccount';
import Login from '../components/account/Login'
import AccountInput from '../components/account/AccountInput';
import AccountEdit from '../components/account/AccountEdit';
import Account from '../components/account/Account';
import HomePage from '../components/HomePage';
import './AccountContainer.css';


class AccountContainer extends React.Component {

  componentDidMount() {
    this.props.checkLoginStatus();
    setTimeout(() => {
      if (Object.keys(this.props.account).length !== 0) {
        this.props.history.push(`/accounts/${this.props.account.id}/invoices`)
      } else {
        this.props.history.push('/')
      }
    }, 1000)
  }

  render() {
   
    return (
      <div>
          <Switch>
            <Route 
              path='/accounts/new' 
              render={(routerProps) => <AccountInput {...routerProps} account={this.props.account}/>}
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
              render={(routerProps) => <Login {...routerProps} account={this.props.account}/>} 
            />

            <Route 
              path="/" 
              render={(routerProps) => <HomePage {...routerProps} account={this.props.account} loggedIn={this.props.loggedIn} />}
            />
          </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    account: state.account
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: (id) => dispatch(fetchAccount(id)),
    checkLoginStatus: () => dispatch(checkLoginStatus())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountContainer));
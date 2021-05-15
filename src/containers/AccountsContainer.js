import React from 'react' 
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchAccounts} from '../actions/fetchAccounts'
import AccountInput from '../components/account/AccountInput'
import AccountEdit from '../components/account/AccountEdit'
import Accounts from '../components/account/Accounts'
import Account from '../components/account/Account'
import HomePage from '../components/HomePage'


class AccountsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts()
  }

  render() {
    return (
      <div onClick={this.props.onClick} className="container">
          <Switch>
          <Route path='/accounts/new' component={AccountInput}/>
          <Route path='/accounts/:id/edit' render={(routerProps) => <AccountEdit {...routerProps} account={this.props.accounts.filter(account => account.id === routerProps.match.params.id++)} />}/>
          <Route path='/accounts/:id' render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts} />}/>
          <Route path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts} />} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAccounts: () => dispatch(fetchAccounts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsContainer);
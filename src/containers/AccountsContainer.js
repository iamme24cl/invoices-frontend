import React from 'react' 
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchAccount} from '../actions/fetchAccount'
import AccountInput from '../components/account/AccountInput'
import AccountEdit from '../components/account/AccountEdit'
import Account from '../components/account/Account'
import HomePage from '../components/HomePage'
import './AccountsContainer.css'


class AccountsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchAccount(1)
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
    fetchAccount: (id) => dispatch(fetchAccount(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsContainer);
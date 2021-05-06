import React from 'react' 
import {connect} from 'react-redux'
import {fetchAccounts} from '../actions/fetchAccounts'
import AccountInput from '../components/AccountInput'
import Accounts from '../components/Accounts'

class AccountsContainer extends React.Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchAccounts()
  }
  
  render() {
    return (
      <div>
        AccountsContainer
        <AccountInput />
        <Accounts />
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
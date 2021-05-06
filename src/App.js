import './App.css';
import React from 'react';
// import {connect} from 'react-redux'
// import {fetchAccounts} from './actions/fetchAccounts'
import AccountsContainer from './containers/AccountsContainer'


class App extends React.Component {

  render () {
    return (
      <div className="App">
       <AccountsContainer />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     accounts: state.accounts
//   }
// }

// Second argument for connect can be mapStateToProps or an action craetor eg. {fetchAccounts} => gives access to this.props.fetchAccounts()
export default App;
 
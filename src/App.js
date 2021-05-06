import './App.css';
import React from 'react';
import {connect} from 'react-redux'
import {fetchAccounts} from './actions/fetchAccounts'


class App extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts({type: 'FETCH_ACCOUNTS', payload: {name: "Just Checking"}});
  }

  render () {
    return (
      <div className="App">
       App
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
export default connect(null, {fetchAccounts})(App);
 
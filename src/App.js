import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {connect} from 'react-redux'
// import {fetchAccounts} from './actions/fetchAccounts'
import AccountsContainer from './containers/AccountsContainer'
import NavBar from './components/NavBar'
import Header from './components/Header'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const body = document.body
    if (body.className == 'show-nav') {
      body.classList.remove('show-nav')
    }
  }

  render () {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <AccountsContainer onClick={this.handleClick} />
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
 
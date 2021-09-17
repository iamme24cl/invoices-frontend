import React from 'react';
import AccountContainer from './containers/AccountContainer'
import NavBar from './components/NavBar'
import Header from './components/Header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <AccountContainer onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
 
import React from 'react';
import AccountContainer from './containers/AccountContainer'
import NavBar from './components/NavBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  render () {
    return (
      <div className="App">
        <NavBar />
        <AccountContainer />
      </div>
    );
  }
}

export default App;
 
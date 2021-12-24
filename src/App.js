import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { NavBar } from "./components";
import Routes from "./Routes";

import './App.css';


class App extends React.Component {

  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
 
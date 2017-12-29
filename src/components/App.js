import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";

import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;

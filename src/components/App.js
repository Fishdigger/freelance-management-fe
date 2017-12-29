import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";

import Header from "./header/Header";
import Body from "./body/Body";
import Foot from "./footer/Foot";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Foot />
      </div>
    );
  }
}

export default App;

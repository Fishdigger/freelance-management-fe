import React, { Component } from 'react';
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <div>
          <h1>Hey there</h1>
        </div>
      </div>
    );
  }
}

export default App;

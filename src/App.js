import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travels
          destination="London"
          country="England"
          photo="http://image.noelshack.com/fichiers/2018/39/1/1537740638-london-small.jpg"
          distance="500km"
        />
        <Travels
          destination="New-York"
          country="United-States"
          photo="http://image.noelshack.com/fichiers/2018/39/1/1537740610-newyork.jpg"
          distance="6000km"
        />
      </div>
    );
  }
}

export default App;

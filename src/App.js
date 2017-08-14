import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from 'reactstrap'
import Navigation from './navbar/navbar'
import {} from './jumbotron/jumbotron'
import Jumbotron from "./jumbotron/jumbotron";
import Bar1 from './bar1/bar1'
import Bar2 from './bar2/bar2'

class App extends Component {
  render() {
    return (
      <div fluid>
      <Navigation />
          <Jumbotron/>
          <Bar1/>
          <Bar2/>
      </div>
    );
  }
}

export default App;

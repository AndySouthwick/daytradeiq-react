import React, { Component } from 'react';
import Navigation from '../navbar/navbar'
import {} from '../jumbotron/jumbotron'
import Jumbotron from "../jumbotron/jumbotron";
import Bar from '../bar/bar'
import Bar1 from '../bar1/bar1'
import Bar2 from '../bar2/bar2'
import Bar3 from '../bar3/bar3'
import Footer from '../footer/footer'


class Landing extends Component {

  render() {
    return (
      <div>
      <Navigation />
          <Jumbotron/>
          <Bar/>
          <Bar1/>
          <Bar2/>
          <Bar3/>
          <Footer/>
      </div>

    );
  }
}

export default Landing;


import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import Landing from './landing/landing'
import ThankYou from './thankyou/thankyou'

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/thankyou" component={ThankYou}/>
      </Switch>
    )
  }
}

export default App
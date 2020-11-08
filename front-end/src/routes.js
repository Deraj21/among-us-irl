import React from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom'

// pages
import LandingPage from './components/LandingPage'
import Lobby from './components/Lobby'
import Game from './components/Game'

const Routes =
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/landing" />
      </Route>
      <Route path="/landing" component={LandingPage} />
      <Route path="/lobby" component={Lobby} />
      <Route path="/game" component={Game} />
    </Switch>
  </Router>

export default Routes
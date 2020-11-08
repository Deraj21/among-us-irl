import React from 'react'
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'

// pages
import LandingPage from './components/LandingPage'
import Lobby from './components/Lobby'
import Game from './components/Game'

function Routes (){

  return (
    <Router>
      <Switch>
        <Route path="/landingPage" component={LandingPage} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/game" component={Game} />
      </Switch>
    </Router>
  )
}

export default Routes
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import EmergencyButton from './EmergencyButton'
import PlayerTasks from './PlayerTasks'

class Game extends Component{


  render(){

    return (
      <div className="Game" >
        <h1>Game (taskbar here)</h1>
        <Switch>
          <Route path="/game/host" component={EmergencyButton} />
          <Route path="/game/player" component={PlayerTasks} />
        </Switch>
      </div>
    )
  }
}

export default Game
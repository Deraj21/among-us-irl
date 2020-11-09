import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import EmergencyButton from './EmergencyButton'
import PlayerTasks from './PlayerTasks'
// assets
import starsSmall from '../assets/stars-small.jpg'

class Game extends Component{


  render(){

    const style = {
      backgroundImage: `url(${starsSmall})`
    }

    return (
      <div className="Game page" style={style}>
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
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import HostLobby from './HostLobby'
import LobbySettings from './LobbySettings'
import PlayerLobby from './PlayerLobby'
import HostTasks from './HostTasks'
// assets
import starsSmall from '../assets/stars-small.jpg'

class Lobby extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render() {

    const style = {
      backgroundImage: `url(${starsSmall})`
    }

    return (
      <div className="Lobby page" style={style}>
        <div className="game-code-box">
          <p>Game Code:</p>
          <h3>QHGJFR</h3>
        </div>
        
        <Switch>
          <Route exact path="/lobby/host" component={HostLobby} />
          <Route path="/lobby/host/settings" component={LobbySettings} />
          <Route path="/lobby/host/tasks" component={HostTasks} />
          <Route path="/lobby/player" component={PlayerLobby} />
        </Switch>
      </div>
    )
  }

}

export default Lobby
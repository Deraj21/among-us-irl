import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import HostLobby from './HostLobby'
import LobbySettings from './LobbySettings'
import PlayerLobby from './PlayerLobby'
import HostTasks from './HostTasks'

class Lobby extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }


  render() {

    return (
      <div className="HostLobby">
        <h1>Lobby CODE here</h1>
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
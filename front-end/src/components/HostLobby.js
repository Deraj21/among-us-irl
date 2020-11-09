import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//components
//assets
import character from '../assets/character.png'
import startButton from '../assets/start-game.png'

class HostLobby extends Component{


  render(){

    const playerCount = 8
    const playerTotal = 10

    return (
      <div className="HostLobby" >
        <Link to="/lobby/host/settings">
          <button className="lobby-btn"><p>GAME SETTINGS</p></button>
        </Link>
        <Link to="/lobby/host/tasks">
          <button className="lobby-btn"><p>MANAGE TASKS</p></button>
        </Link>

        <div className="player-count">
          <img src={character} alt="mini character" />
          <p>{playerCount}/{playerTotal}</p>
        </div>

        <Link to="/game/host">
          <img className="start-btn" src={startButton} alt="start-button" />
        </Link>
      </div>
    )
  }
}

export default HostLobby
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Setting from './Setting'
import cancel from '../assets/back.png'

class LobbySettings extends Component{


  render(){

    const data = [
      {
        name: '# imposters',
        value: 3
      },
      {
        name: 'kill cooldown',
        value: '25 s'
      },
      {
        name: '# short tasks',
        value: 3
      },
      {
        name: '# long tasks',
        value: 1
      }

    ]
    const settings = data.map((s, i) => <Setting key={i} id={i} name={s.name} value={s.value} />)

    return (
      <div className="LobbySettings">
        <div className="title">
          <h2>Game Settings</h2>
          <Link to="/lobby/host">
            <img id="back" src={cancel} alt="cancel"/>
          </Link>
        </div>
        
        <table className="settings">
          <tbody>
            { settings }
          </tbody>
        </table>

      </div>
    )
  }
}

export default LobbySettings
import React from 'react'
import { Link } from 'react-router-dom'

import GoArrow from './Elements/GoArrow'
import cancel from '../assets/back.png'

function PlayerJoin(props) {

  let {
    code, updateCode
  } = props

  return (
    <div className="joining-box">
      <Link to="/landing">
        <img id="back" src={cancel} alt="back" />
      </Link>

      <div className="enter-code-box">
        <input type="text" className="lobby-input code-input" placeholder="code" value={code} onChange={(e) => updateCode(e)}/>
        <Link to="/lobby/player">
          <GoArrow color="white" backgroundColor="black" scale="1"/>
        </Link>
        
      </div>
    </div>
  )
}

export default PlayerJoin
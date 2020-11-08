import React from 'react'
import { Link } from 'react-router-dom'

function LandingButtons(){

  return (
    <div className="btn-box">
    <Link to="/lobby/host">
      <button className="lobby-btn"><p>HOST</p></button>
    </Link>
    <Link to="/landing/playerJoin">
      <button className="lobby-btn"><p>JOIN</p></button>
    </Link>
  </div>
  )
}

export default LandingButtons
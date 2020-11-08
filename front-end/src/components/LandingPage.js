import { Component } from 'react';

import GoArrow from './Elements/GoArrow'

import amongUsCouch from '../assets/among-us-irl.jpg' // '../assets/among-us-space-background.jpg'
import starsSmall from '../assets/stars-small.jpg'
import cancel from '../assets/back.png'

class LandingPage extends Component {
  constructor() {
    super()

    this.state = {
      nickname: '',
      code: '',
      joining: false
    }

  }

  updateNickname(e) {
    this.setState({ ...this.state, nickname: e.target.value })
  }

  updateCode(e) {
    this.setState({ ...this.state, code: e.target.value })
  }

  updateJoining(joining){
    this.setState({ ...this.state, joining: joining })
  }

  render() {
    let { nickname, code, joining } = this.state

    const landingPageStyle = {
      backgroundImage: `url(${starsSmall})`
    }

    return (
      <div className="LandingPage" style={landingPageStyle}>
        <img className="innerImage" alt="among-us-irl" src={amongUsCouch} />
        {
          joining
          ?
          <div className="joining-box">
            <img id="back" src={cancel} alt="back" onClick={() => this.updateJoining(false)} />

            <input type="text" className="lobby-input" placeholder="nickname" value={nickname} onChange={(e) => this.updateNickname(e)} />

            <div className="enter-code-box">
              <input type="text" className="lobby-input code-input" placeholder="code" value={code} onChange={(e) => this.updateCode(e)}/>
              <GoArrow color="white" backgroundColor="black" scale="1"/>
            </div>
          </div>
          :
          <div className="btn-box">
            <button className="lobby-btn"><p>HOST</p></button>
            <button className="lobby-btn" onClick={() => this.updateJoining(true)} ><p>JOIN</p></button>
          </div>
        }
      </div>
    );
  }
}

export default LandingPage;

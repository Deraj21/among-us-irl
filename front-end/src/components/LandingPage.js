import { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

// components
import LandingButtons from './LandingButtons'
import PlayerJoin from './PlayerJoin'
// assets
import amongUsCouch from '../assets/among-us-irl.jpg'
import starsSmall from '../assets/stars-small.jpg'

class LandingPage extends Component {
  constructor() {
    super()

    this.state = {
      nickname: '',
      code: ''
    }

    this.updateNickname = this.updateNickname.bind(this)
    this.updateCode = this.updateCode.bind(this)
  }

  updateNickname(e) {
    this.setState({ ...this.state, nickname: e.target.value })
  }

  updateCode(e) {
    this.setState({ ...this.state, code: e.target.value })
  }

  render() {
    let { nickname, code } = this.state

    const landingPageStyle = {
      backgroundImage: `url(${starsSmall})`
    }

    return (
      <div className="LandingPage" style={landingPageStyle}>
        <img className="innerImage" alt="among-us-irl" src={amongUsCouch} />

        <Switch>
          <Route exact path="/landing">
            <LandingButtons/>
          </Route>
          <Route path="/landing/playerJoin">
            <PlayerJoin code={code} updateCode={this.updateCode} nickname={nickname} updateNickname={this.updateNickname}/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default LandingPage;

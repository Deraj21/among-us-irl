import { Component } from 'react';

import amongUsCouch from '../assets/among-us-irl.jpg' // '../assets/among-us-space-background.jpg'
import starsSmall from '../assets/stars-small.jpg'

class LandingPage extends Component {
  constructor() {
    super()

    this.state = {
      nickname: '',
      joining: false
    }

  }

  render() {

    console.log(amongUsCouch)

    const landingPageStyle = {
      backgroundImage: `url(${starsSmall})`
    }
    // const innerPageStyle = {
    //   backgroundImage: `url(${amongUsCouch})`
    // }

    return (
      <div className="LandingPage" style={landingPageStyle}>
        <img className="innerImage" alt="among-us-irl" src={amongUsCouch} />
        <div className="btn-box">
          <button className="lobby-btn"><p>HOST</p></button>
          <button className="lobby-btn"><p>JOIN</p></button>
        </div>
      </div>
    );
  }
}

export default LandingPage;

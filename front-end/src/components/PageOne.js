import React, { Component } from 'react'

class PageOne  extends Component {

  render(){

    return (
      <div className="PageOne">
        <h1>Among Us IRL</h1>
        <button onClick={() => this.props.updatePage(2)} >Host</button>
        <div>
          <input type="text"></input>
          <button onClick={() => this.props.updatePage(2)} >Join</button>
        </div>
      </div>
    )
  }
}

export default PageOne;
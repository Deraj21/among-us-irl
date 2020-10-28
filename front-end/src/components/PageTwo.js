import React, { Component } from 'react'

const boxColors = ['red', 'green', 'blue']

class PageTwo  extends Component {

  render(){
    let { colorId, updateColorId, updatePage } = this.props

    return (
      <div className="PageTwo">
        <p>Page 2!</p>
        <button onClick={() => updatePage(1)}>back</button>
        <div className="box"
          style={{ backgroundColor: boxColors[colorId] }}
          onClick={() => updateColorId( (colorId + 1) % 3 )}
        ></div>
      </div>
    )
  }
}

export default PageTwo;
import React, { Component } from 'react'

class HostTask extends Component {

  
  render(){
    let { description, location, type } = this.props
  
    return (
      <tr className="HostTask" >
        <td>{description}</td>
        <td>{location}</td>
        <td>{type}</td>
      </tr>
    )
  }

}

export default HostTask
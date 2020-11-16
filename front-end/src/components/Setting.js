import React, { Component } from 'react'

class Setting extends Component{


  render(){

    let { id, name, value } = this.props

    return (
      <tr className="Setting">
        <td>{name}</td>

        <td>-</td>
        <td>{value}</td>
        <td>+</td>
      </tr>
    )
  }
}

export default Setting
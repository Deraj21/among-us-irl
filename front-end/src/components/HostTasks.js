import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import HostTask from './HostTask'
import cancel from '../assets/back.png'

class HostTasks extends Component{
  constructor(props){
    super(props)

    this.newTask = this.newTask.bind(this)
  }

  newTask(){
    console.log('adding new Task...')
  }

  render(){

    const data = [
      {
        description: "solve the rubik's cube",
        location: "jason's desk",
        type: "long"
      },
      {
        description: "put together the puzzle",
        location: "",
        type: "short"
      },
      {
        description: "stack the cups in a pyramid",
        location: "kitchen",
        type: "short"
      }
    ]

    let tasks = data.map((task, i) => 
      <HostTask key={`host-task-${i}`} id={i} description={task.description} location={task.location} type={task.type}/>
    )

    return (
      <div className="HostTasks" >
        <div className="title">
          <h2 id="manage-tasks-title">Manage Tasks</h2>
          <Link to ="/lobby/host">
            <img id="back" src={cancel} alt="cancel"/>
          </Link>
        </div>

        <table>
          <thead>
            <tr>
              <td>Description</td>
              <td>Location</td>
              <td>Type</td>
            </tr>
          </thead>
          <tbody>
            { tasks }
          </tbody>
        </table>

        <div className="new-task">
          <p onClick={() => this.newTask()} >+ new task</p>
        </div>

      </div>
    )
  }
}

export default HostTasks
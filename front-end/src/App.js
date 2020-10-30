import { Component } from 'react';
// import { Ably } from 'ably';

import './App.css';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

// env
const API_KEY = ''


// Ably
const Ably = require('ably');
let realtime = new Ably.Realtime(API_KEY);

// channel.subscribe(function(message) {
//   console.log("Received: ",  message.data);
// });


class App extends Component {
  constructor() {
    super()

    this.state = {
      currentPage: 1,
      colorId: 0
    }

    
    this.updateColorId = this.updateColorId.bind(this)
    this.publishColor = this.publishColor.bind(this)
    this.updatePage = this.updatePage.bind(this)
    
    // setup channel
    this.channel = realtime.channels.get('box-color');
    this.channel.subscribe(this.updateColorId);
  }

  updateColorId(msg){
    // brom ably
    console.log("recieved: ", msg.data);

    this.setState({ ...this.state, colorId: parseInt(msg.data) })
  }

  publishColor(id){
    this.channel.publish("color", id+"");
  }

  updatePage(page){
    this.setState({ ...this.state, currentPage: page })
  }

  render() {
    let { currentPage, colorId } = this.state

    return (
      <div className="App">
        {
        currentPage === 1
        ?
        <PageOne updatePage={this.updatePage} />
        :
        <PageTwo updatePage={this.updatePage} updateColorId={this.publishColor} colorId={colorId} />
        }
      </div>
    );
  }
}

export default App;

import { Component } from 'react';
import env from './env';

import LandingPage from './components/LandingPage'

import './App.css';

// Ably code here?

class App extends Component {
  constructor() {
    super()

  }

  render() {

    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;

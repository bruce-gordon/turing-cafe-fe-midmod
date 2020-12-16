import React, { Component } from 'react';
import './App.css';
import { getData } from '../apiCalls.js';
import List from '../List/List.js';
import Res from '../Res/Res.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getData()
    .then(data => this.setState({ reservations: data }))
    .catch
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <List

          />
        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { getData } from '../apiCalls.js';
import List from '../List/List.js';
import Res from '../Res/Res.js';
import Form from '../Form/Form.js';
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
    .catch(error => this.setState({ error: error.message }))
  }

  addReservation = (newRes) => {
    this.setState({ reservations: [...this.state.reservations, newRes] })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form
            addReservation={ this.addReservation }
          />
        </div>
        <div className='resy-container'>
          <List
            reservations={ this.state.reservations }
          />
        </div>
      </div>
    )
  }
}

export default App;

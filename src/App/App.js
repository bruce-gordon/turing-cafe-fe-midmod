import React, { Component } from 'react';
import './App.css';
import { getData, postData, deleteData } from '../apiCalls.js';
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
    postData(newRes)
    .then(console.log(`Reservation added for ${newRes.name}`))
    .catch(error => this.setState({ error: error.message }))
  }

  cancelReservation = (id) => {
    const updatedReservations = this.state.reservations.filter(res => res.id !== id);
    this.setState({ reservations: updatedReservations });
    deleteData(id)
    .then(console.log(`Reservation #${id} has been deleted.`))
    .catch(error => this.setState({ error: error.message }))
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
            cancel={ this.cancelReservation }
          />
        </div>
      </div>
    )
  }
}

export default App;

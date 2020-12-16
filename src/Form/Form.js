import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newRes = { name: this.state.name, date: this.state.date, time: this.state.time, number: parseInt(this.state.number) };
    this.props.addReservation(newRes);
    this.clearForm();
  }

  clearForm = () => {
    this.setState({ name: '', date: '', time: '', number: '' })
  }

  render() {
    return (
      <div className='res-form'>
        <form>
          <label htmlFor='name'></label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={ this.state.name }
            onChange={ this.handleChange }
          ></input>
          <label htmlFor='date'></label>
          <input
            type='text'
            name='date'
            placeholder='Date (mm/dd)'
            value={ this.state.date }
            onChange={ this.handleChange }
          ></input>
          <label htmlFor='time'></label>
          <input
            type='text'
            name='time'
            placeholder='Time'
            value={ this.state.time }
            onChange={ this.handleChange }
          ></input>
          <label htmlFor='number'></label>
          <input
            type='text'
            name='number'
            placeholder='Number of guests'
            value={ this.state.number }
            onChange={ this.handleChange }
          ></input>
          <button
            className='make-res-button'
            onClick={ this.handleSubmit }
          >Make Reservation</button>
        </form>
      </div>
    )
  }
}

export default Form;

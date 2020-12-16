import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from '../Form/Form.js';
import List from '../List/List.js';
import Res from '../Res/Res.js';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';


describe('App', () => {
  const mockAddReservation = jest.fn();

  it('should add a new reservation by clicking submit button', () => {
    render(<App addReservation={ mockAddReservation }/>);

    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date (mm/dd)');
    const timeInput = screen.getByPlaceholderText('Time');
    const guestInput = screen.getByPlaceholderText('Number of guests');
    const makeReservation = screen.getByText('Make Reservation');

    userEvent.type(nameInput, "Tyler");
    userEvent.type(dateInput, "12/31");
    userEvent.type(timeInput, "11:00");
    userEvent.type(guestInput, "5");
    userEvent.click(makeReservation);

    expect(screen.getByText('Tyler')).toBeInTheDocument()
    expect(screen.getByText('12/31')).toBeInTheDocument()
    expect(screen.getByText('11:00')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

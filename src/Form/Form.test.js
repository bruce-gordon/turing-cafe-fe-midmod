import React from 'react';
import Form from './Form.js'
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Form', () => {
  const mockAddReservation = jest.fn()

  beforeEach(() => {
    render (
      <Form
        addReservation={ mockAddReservation }
      />
    )
  })

  it('should update the form input with correct data from user', () => {
    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date (mm/dd)');
    const timeInput = screen.getByPlaceholderText('Time');
    const guestInput = screen.getByPlaceholderText('Number of guests');

    userEvent.type(nameInput, "Bruce");
    userEvent.type(dateInput, "12/31");
    userEvent.type(timeInput, "7:00");
    userEvent.type(guestInput, "12");

    expect(nameInput.value).toBe("Bruce");
    expect(dateInput.value).toBe("12/31");
    expect(timeInput.value).toBe("7:00");
    expect(guestInput.value).toBe("12");
  })

})

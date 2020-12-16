import React from 'react';
import Res from './Res.js'
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Res', () => {

  beforeEach(() => {
    render (
      <Res
        key={ 1 }
        id={ 1 }
        name={ "Pepper" }
        date={ "12/31" }
        time={ "7:00" }
        number={ 2 }
      />
    )
  });

  it('should render a reservation with the correct data', () => {
    const name = screen.getByText('Pepper');
    const date = screen.getByText('12/31');
    const time = screen.getByText('7:00');
    const number = screen.getByText('2');

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(number).toBeInTheDocument();
  });

})

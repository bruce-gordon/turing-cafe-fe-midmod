import React from 'react';
import './Res.css';

const Res = ({ id, name, date, time, number }) => {
  return (
    <article className='reservation'>
      <h4>{ name }</h4>
      <p>{ date }</p>
      <p>{ time }</p>
      <p>{ number }</p>
      <button className='cancel-res'>Cancel</button>
    </article>
  )
}

export default Res;

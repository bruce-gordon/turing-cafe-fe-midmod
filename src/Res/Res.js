import React from 'react';
import './Res.css';

const Res = ({ id, name, date, time, number, cancel }) => {
  const handleClick = (id) => {
    cancel(id);
  }

  return (
    <article className='reservation'>
      <h4>{ name }</h4>
      <p>{ date }</p>
      <p>{ time }</p>
      <p>{ number }</p>
      <button
        onClick={ (() => handleClick(id)) }
        className='cancel-res'
      >Cancel</button>
    </article>
  )
}

export default Res;

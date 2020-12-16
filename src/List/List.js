import React from 'react';
import './List.css';
import Res from '../Res/Res.js';


const List = ({ reservations, cancel }) => {
  const allReservations = reservations.map(res => {
    return (
      <Res
        key={ res.id }
        id={ res.id }
        name={ res.name }
        date={ res.date }
        time={ res.time }
        number={ res.number }
        cancel={ cancel }
      />
    )
  })

  return (
    <section className='res-list'>
      { allReservations }
    </section>
  )
}

export default List;

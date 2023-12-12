/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import '../styles/Card.css'

function Card({ data, handleClick }) {
  const [count, setCount] = useState(1)

  return (
    <div className='card'>
      <div className='card-img'>
        <img src={data.image} alt={data.title} />
      </div>
      <p className='card-title'>{data.title}</p>
      <div className='card-details'>
        <div className='card-product-counter'>
          <button
            type='button'
            className='decrement'
            disabled={count === 1}
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <input readOnly type='text' name='counter' id='counter' value={count} />
          <button
            type='button'
            className='increment'
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
        <button
          type='button'
          className='add-btn'
          onClick={() => handleClick(data, count)}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Card

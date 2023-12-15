import React from 'react'
import Navbar from './Navbar'
import FSA from '../assets/fsa.png'
import '../styles/Home.css'

function Home() {
  return (
    <>
      <Navbar />
      <div className='home-content'>
        <h1>This is a fake online store to practice some React!</h1>
        <p>
          All the products are retrieved from
          {' '}
          <a href='http://www.fakestoreapi.com' target='_blank' rel='noreferrer'>Fake Store API</a>
        </p>
        <img src={FSA} alt='Fake Store API Website' />
      </div>
    </>
  )
}

export default Home

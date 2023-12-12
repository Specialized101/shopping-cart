/* eslint-disable react/prop-types */
import React from 'react'
import Navbar from './Navbar'
import '../styles/Shop.css'

function Shop({ data, error, loading }) {
  return (
    <>
      <Navbar />
      {loading && <p>Loading...</p>}
      {error && <p>A network error occured</p>}
      <div>
        {data && data.map((item) => <img key={item.id} src={item.image} alt={item.title} />)}
      </div>
    </>
  )
}

export default Shop

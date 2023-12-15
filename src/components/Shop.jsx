/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import Navbar from './Navbar'
import '../styles/Shop.css'
import Cart from '../assets/cart.png'

function Shop({ data, error, loading }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart')
    return storedCart ? JSON.parse(storedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(product, count) {
    const productInCart = cart.find((item) => item.product.id === product.id)
    if (!productInCart) {
      setCart([...cart, { product, count }])
      return
    }
    const updatedCart = cart.map((item) => {
      if (item.product.id === product.id) {
        return { ...item, count: item.count + count }
      }
      return item
    })
    setCart(updatedCart)
  }

  return (
    <>
      <Navbar />
      {loading && <p>Loading...</p>}
      {error && <p>A network error occured</p>}
      <div className='cart-icon'>
        <Link to='/shop/shopping-cart'><img className='cart-logo' src={Cart} alt='Shopping cart' /></Link>
        {cart.length > 0 && <div className='cart-count'>{cart.length}</div>}
      </div>
      <section className='products'>
        {data && data.map((item) => <Card handleClick={addToCart} key={item.id} data={item} />)}
      </section>
    </>
  )
}

export default Shop

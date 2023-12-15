/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Trash from '../assets/trash.png'
import '../styles/ShoppingCart.css'
import '../styles/minimal-table.css'

function ShoppingCart() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart')
    return storedCart ? JSON.parse(storedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function calcTotalPrice() {
    const res = cart.reduce((total, item) => total + item.product.price * item.count, 0)

    return res
  }

  function updateQuantity(product, amount) {
    const updatedCart = cart.map((item) => {
      if (item.product.id === product.product.id) {
        return { ...item, count: item.count + amount }
      }
      return item
    })
    setCart(updatedCart)
  }

  function deleteItem(product) {
    const updatedCart = cart.filter((item) => item.product.id !== product.product.id)
    setCart(updatedCart)
  }

  return (
    <>
      <Navbar />
      <div className='cart'>
        {cart.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th />
                <th>Product Details</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.product.id}>
                  <td>
                    <button type='button' onClick={() => deleteItem(item)}>
                      <img src={Trash} alt='Delete product from cart' />
                    </button>
                  </td>
                  <td>
                    <div className='cart-product-info'>
                      <img src={item.product.image} alt={item.product.title} />
                      <div className='product-details'>
                        <p>{`Category: ${item.product.category}`}</p>
                        <p>{item.product.title}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='card-product-counter'>
                      <button
                        type='button'
                        className='decrement'
                        disabled={item.count === 1}
                        onClick={() => updateQuantity(item, -1)}
                      >
                        -
                      </button>
                      <input readOnly type='text' name={`counter${item.product.id}`} id={`counter${item.product.id}`} value={item.count} />
                      <button
                        type='button'
                        className='increment'
                        onClick={() => updateQuantity(item, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{`$${item.product.price}.00`}</td>
                  <td>{`$${item.product.price * item.count}.00`}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={4} className='bg-black' />
                <td>{`$${calcTotalPrice()}.00`}</td>
              </tr>
              <tr>
                <td colSpan={5}>
                  <div className='checkout-container'>
                    <Link className='cart-link' to='/shop'>
                      <span className='arrow'>←</span>
                      {' '}
                      Continue shopping
                    </Link>
                    <button className='cart-checkout-btn' type='button'>Checkout</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className='cart-container'>
            <p>Your Cart is empty!</p>
            <Link to='/shop'>Go back to shopping</Link>
          </div>
        )}
      </div>
    </>
  )
}

export default ShoppingCart

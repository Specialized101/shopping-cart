import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className='navigation'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar

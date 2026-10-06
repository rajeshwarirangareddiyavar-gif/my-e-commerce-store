import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({cart}) {
  return (
   <nav>
    <h1>My E-Commerce Store</h1>
     <div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">
  Cart 🛒 ({cart.reduce((total, item) => total + item.quantity, 0)})
</Link>
      
    </div>
   </nav>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

      <div className="hero">
        <h1>Welcome to My E-Commerce Store</h1>

        <p>
          Find the best products at the best prices.
        </p>

        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </div>

      <div className="featured">
        <h2>Featured Products</h2>

        <div className="featured-products">

         <Link to="/products"><div>
          <h3>Laptop</h3>
          <p>₹50,000</p>
          </div></Link>

          <Link to="/products"><div>
            <h3>SmartPhone</h3>
            <p>₹16,400</p>
          </div></Link>

           <Link to="/products"><div>
            <h3>HeadPhones</h3>
            <p>₹2,000</p>
          </div></Link>

        </div>
      </div>
      <footer className="footer">
        <p>© 2026 My E-Commerce Store</p>
        <p>All rights reserved.</p>
        </footer>

    </div>
  )
}

export default Home
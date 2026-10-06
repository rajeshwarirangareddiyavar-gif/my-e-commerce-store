import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderConfirmation() {

  const orderId = Math.floor(Math.random() * 1000000)
  const navigate = useNavigate()

  return (
    <div className="order-confirmation">
      <h1>Order Placed Successfully! 🎉</h1>

      <p>Thank you for your order.</p>

      <p>Your order has been confirmed.</p>

      <h3>Order ID: #{orderId}</h3>

      <h3>Order Status: Confirmed ✅</h3>

      <button onClick={() => navigate('/products')}>
        Continue Shopping
      </button>
    </div>
  )
}

export default OrderConfirmation
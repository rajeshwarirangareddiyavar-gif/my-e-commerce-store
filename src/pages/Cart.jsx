import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cart({cart,removeFromCart,increaseQuantity,decreaseQuantity}) {

  const totalPrice=cart.reduce(
    (total,product)=>total+product.price*product.quantity,
    0
  )
  const navigate=useNavigate()
  return (
    <div>
      <h1 className="cart-heading">Shopping Cart 🛒</h1>
      {cart.length===0?(
          <div className="empty-cart">
            <h2>Your cart is empty 🛒</h2>
            <button onClick={() => navigate('/products')}>
              Continue Shopping</button>
            </div>
      ):(
      cart.map((product)=>(
        <div key={product.id} className="cart-item">
           <img 
           src={product.image} 
           alt={product.name}/>
            <h3>{product.name}</h3>
            <p>Price:₹{product.price}</p>
            <div className="quantity-control">
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
              </div>
            

            <button className="remove-btn" onClick={()=>removeFromCart(product.id)}>Remove</button>
        </div>
      ))
    )}
    {cart.length > 0 && (
  <>
      <h2 className='cart-total'>Total Price:{totalPrice}</h2>
      <button className="checkout-btn" onClick={()=>navigate('/checkout')}>Checkout</button>
      </>
    )}
    </div>
  )
}

export default Cart

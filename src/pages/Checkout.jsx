import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Checkout({placeOrder,cart}) {
  const[name,setName]=useState("")
  const[phone,setPhone]=useState("")
  const[address,setAddress]=useState("")

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0)

  const navigate=useNavigate()
  const handlePlaceholder=()=>{
    if(name==="" || phone==="" || address===""){
      alert("Please fill all fields")
      return
    }
    placeOrder()
    navigate('/order-confirmation')
  }
  return (
    <div  className="checkout-container">
      <h1>Checkout </h1>
      <h2>Order Total: ₹{totalPrice}</h2>
      <label>Name</label>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name'/>

      <label>Phone</label>
      <input type='tel' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter your number'/>

      <label>Address</label>
      <textarea value={address} onChange={(e)=>setAddress(e.target.value)}/>


        <button onClick={() => navigate('/cart')}>  Back to Cart
        </button>


        <button onClick={handlePlaceholder}>
          Place Order</button>
    </div>
  )
}

export default Checkout

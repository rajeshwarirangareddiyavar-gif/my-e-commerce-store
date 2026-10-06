import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDetails({ addToCart }) {

  const { id } = useParams()
  const navigate = useNavigate()
  const[message,setmessage]=useState("")
  const[quantity,setQuantity]=useState(1)

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      category: "Electronics",
      description: "Powerful laptop suitable for programming, work and everyday use.",
      image: "https://up.yimg.com/ib/th/id/OIP.DqhLby_LQjtBU4z-nRTycAHaFI?pid=Api&rs=1&c=1&qlt=95&w=137&h=95"
    },
    {
      id: 2,
      name: "SmartPhone",
      price: 16400,
      category: "Electronics",
      description: "Fast and reliable smartphone with a modern design and useful features.",
      image: "https://tse3.mm.bing.net/th/id/OIP.ly_HCwk6Vr8tqZzXjy-hgAHaHa?r=0&pid=Api&P=0&h=180"
    },
    {
      id: 3,
      name: "HeadPhones",
      price: 2000,
      category: "Accessories",
      description: "Comfortable headphones with clear sound quality for music and entertainment.",
      image: "https://tse3.mm.bing.net/th/id/OIP.4xg_fMbU_ayyw96DXdBWXAHaHa?r=0&pid=Api&P=0&h=180"
    }
  ]

  const product = products.find(
    (item) => item.id === Number(id)
  )

  return (
    <div className="product-details">

      <h1>Product Details</h1>

      {product && (
        <>
          <img
            src={product.image}
            alt={product.name}
          />

          <h2>{product.name}</h2>

          <p>Price: ₹{product.price}</p>

          <p>Category: {product.category}</p>
          <p className="product-description"><strong>Description:</strong>  {product.description}</p>
          <div className="quantity-control">
            <button onClick={()=>setQuantity(quantity>1?quantity-1:1)}>-</button>
            <span>{quantity}</span>
            <button onClick={()=>setQuantity(quantity+1)}>+</button>
          </div>

          <button onClick={() => {
           
              addToCart(product,quantity) 
            
            setmessage("Added to cart")}}>
            Add To Cart 🛒
          </button>
          {message && <p className="cart-message">{message}</p>}
          {message && ( <button onClick={() => navigate('/cart')}>
            Go to Cart 🛒</button>
          )}

          <button onClick={() => navigate('/products')}>
            Back to Products
          </button>
        </>
      )}

    </div>
  )
}

export default ProductDetails
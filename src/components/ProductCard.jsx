import React from 'react'

function ProductCard({name,price,image,onAddToCart}) {
  return (
    <div className='product-card'>
      <img src={image}
      alt={name}/>
      <h2>{name}</h2>
      <p>Price:₹{price}</p>
      <button onClick={onAddToCart}>Add To Cart</button>
    </div>
  )
}

export default ProductCard

import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

function Products({addToCart}) {
  const[search,setSearch]=useState("")
  const[category,setcategory]=useState("All")

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      category:"Electronics",
      image: 'https://up.yimg.com/ib/th/id/OIP.DqhLby_LQjtBU4z-nRTycAHaFI?pid=Api&rs=1&c=1&qlt=95&w=137&h=95'
    },
    {
      id: 2,
      name: "SmartPhone",
      price: 16400,
      category:"Electronics",
      image: 'https://tse3.mm.bing.net/th/id/OIP.ly_HCwk6Vr8tqZzXjy-hgAHaHa?r=0&pid=Api&P=0&h=180'
    },
    {
      id: 3,
      name: "HeadPhones",
      price: 2000,
      category:"Accessories",
      image: 'https://tse3.mm.bing.net/th/id/OIP.4xg_fMbU_ayyw96DXdBWXAHaHa?r=0&pid=Api&P=0&h=180'
    }
  ]

  const filteredProducts=products.filter((product)=>
  product.name.toLowerCase().includes(search.toLowerCase())&& 
  (category==="All"||product.category===category))

  return (
    <div>
    <div  className="products-filter">
      <h1>Products</h1>
      <input type="text" value={search} 
      placeholder='Search products' onChange={(e)=>setSearch(e.target.value)}/>

      <select
        value={category}
        onChange={(e)=>setcategory(e.target.value)}>
          <option value={"All"}>All</option>
          <option value={"Electronics"}>Electronics</option>
          <option value={"Accessories"}>Accessories</option>
      </select>
      </div>

      <div className="product-container">
        {filteredProducts.length===0?(
          <h2>No products found 😔</h2>
        ):(
        filteredProducts.map((product) => (
          <div key={product.id} className="product-wrapper">
          <ProductCard
            name={product.name}
            price={product.price}
            image={product.image}
            onAddToCart={()=>addToCart(product)}
          />
          <Link to={`/product/${product.id}`}>
            <button className="view-details-btn">View Details</button>
          </Link>
          </div>
        ))
      )}
      </div>
    </div>
  )
}

export default Products
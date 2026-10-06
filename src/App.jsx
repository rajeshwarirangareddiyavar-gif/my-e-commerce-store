import React, { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import ProductDetails from './pages/ProductDetails'

function App() {

  const[cart,setcart]=useState(()=>{
    const savedcart=localStorage.getItem("cart")
    return savedcart?JSON.parse(savedcart):[]
  })

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])

  const products=[
    {
      id:1,
      name:"Laptop",
      price:50000,
      image:'https://up.yimg.com/ib/th/id/OIP.DqhLby_LQjtBU4z-nRTycAHaFI?pid=Api&rs=1&c=1&qlt=95&w=137&h=95'
    },
    {
      id:2,
      name:"SmartPhone",
      price:16400,
      image:'https://tse3.mm.bing.net/th/id/OIP.ly_HCwk6Vr8tqZzXjy-hgAHaHa?r=0&pid=Api&P=0&h=180'
    },
    {
      id:3,
      name:"HeadPhones",
      price:2000,
      image:'https://tse3.mm.bing.net/th/id/OIP.4xg_fMbU_ayyw96DXdBWXAHaHa?r=0&pid=Api&P=0&h=180'
    }
  ]

 const addToCart = (product, quantity = 1) => {

  setcart((currentCart) => {

    const existingProduct = currentCart.find(
      (item) => item.id === product.id
    )

    if (existingProduct) {

      return currentCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + quantity
            }
          : item
      )

    } else {

      return [
        ...currentCart,
        {
          ...product,
          quantity: quantity
        }
      ]

    }

  })
}

  const removeFromCart=(id)=>{
    const updateCart=cart.filter((product)=>product.id!==id)

    setcart(updateCart)
  }

  const increaseQuantity=(id)=>{
    setcart(
      cart.map((item)=>
      item.id===id?{...item,quantity:item.quantity+1}
      :item)

    )
  }

  const decreaseQuantity=(id)=>{
    setcart(
      cart.map((item)=>
      item.id===id?{...item,quantity:item.quantity-1}:item)
      .filter((item)=>item.quantity>0)
    )
  }
  const placeOrder=()=>{
    setcart([])
  }
  return (
    <BrowserRouter>
    <Navbar cart={cart}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products addToCart={addToCart}/>}/>

      <Route path='/product/:id' element={<ProductDetails addToCart={addToCart}/>}/>
      <Route path='/cart' element={<Cart 
      cart={cart}  removeFromCart={removeFromCart} increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity} />}/>

        <Route path='/checkout' element={<Checkout placeOrder={placeOrder} cart={cart}/>}/>

        <Route path='order-confirmation' element={<OrderConfirmation/>}/>
    </Routes>
    
    </BrowserRouter>
    
  )
}

export default App

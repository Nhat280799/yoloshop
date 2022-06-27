import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from '../pages/Home'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Catalog from '../pages/Catalog'
import Checkout from '../pages/Checkout'
import Thankyou from '../pages/Thankyou';
const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/catalog/:slug' element={<Product />}/>
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/thankyou" element={<Thankyou />} />
    </Routes>
  )
}

export default Routess

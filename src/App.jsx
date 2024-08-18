import React from 'react'
import Layout from './Component/Layout'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='/cart-list' element={<CartPage/>} />
            <Route path='/checkout' element={<Checkout />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
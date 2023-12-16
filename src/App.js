import React from 'react'
import Navbar from './Components/Navbar/Navabar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer.jsx'
import mens_banner from './Components/Assets/banner_mens.png'
import womens_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={mens_banner} category="men's clothing"/>}/>
        <Route path='/women' element={<ShopCategory banner={womens_banner} category="women's clothing"/>}/>
        <Route path='/electronics' element={<ShopCategory banner={kids_banner} category="electronics"/>}/>
        <Route path='/product' element={<Products/>}>
          <Route path=':productId' element={<Products/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}

export default App
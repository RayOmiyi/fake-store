import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navabar = () => {
    const { getTotalCartItems } = useContext(ShopContext);
    const [menu, setMenu] = useState("shop");
    return (
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Shop{menu === "shop" ? <hr /> : <></>}
            </Link>
          </li>
          <li
            onClick={() => {
              setMenu("men's clothing");
            }}
          >
            <Link to={"/men"} style={{ textDecoration: "none" }}>
              Men {menu === "men's clothing" ? <hr /> : <></>}
            </Link>
          </li>
          <li
            onClick={() => {
              setMenu("women's clothing");
            }}
          >
            <Link to={"/women"} style={{ textDecoration: "none" }}>
              Women {menu === "women's clothing" ? <hr /> : <></>}
            </Link>
          </li>
          <li
            onClick={() => {
              setMenu("electronics");
            }}
          >
            <Link to={"/electronics"} style={{ textDecoration: "none" }}>
              Electronics {menu === "electronics" ? <hr /> : <></>}
            </Link>
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
          <Link to={"/cart"}>
            <img src={cart_icon} alt="" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    );
}

export default Navabar
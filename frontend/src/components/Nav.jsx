import React from 'react'
import style from "../css/nav.module.css"
import logo from "../images/dsb.jpg"
import { Link } from 'react-router-dom'

const Nav = () => {

  
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} alt="company logo" />
      </div>
      <div className={style.searchBox}>
    
        <input type="text" name="product" placeholder='Search your products' />
        
      </div>
      <div className={style.content}>
          <ul>
            <li><a href="/nav">Products</a>
            <div className={style.subProductmenu}>
              <ul>
              <li><a href="/nav">Electrical</a></li>
              <li><a href="/nav">Foot wear</a></li>
              <li><a href="/nav">Books</a></li>
              <li><a href="/nav">Grocery</a></li>
              <li><a href="/nav">Sports</a></li>
              </ul>
            </div>
            </li>
            <li><a href="/nav">Categories</a>
            <div className={style.subProductmenu}>
              <ul>
              <li><a href="/nav">Men's Wear</a></li>
              <li><a href="/nav">Women's Wear</a></li>
              <li><a href="/nav">Kids Wear</a></li>
              <li><a href="/nav">Western</a></li>
              <li><a href="/nav">Classic</a></li>
              </ul>
            </div>
            </li>
            <li><a href="/nav">Brands</a>
            <div className={style.subProductmenu}>
              <ul>
              <li><a href="/nav">Adidas</a></li>
              <li><a href="/nav">Nike</a></li>
              <li><a href="/nav">Puma</a></li>
              <li><a href="/nav">Bata</a></li>
              <li><a href="/nav">Reebok</a></li>
              </ul>
            </div>
            </li>
            <li><a href="/nav">About Us</a></li>
            <li><a href="/nav"><i className="fa-solid fa-user"></i></a></li>
            <li ><Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link></li>
          </ul>
      </div>

    </div>
  )
}

export default Nav
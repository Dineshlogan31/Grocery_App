import React from 'react'
import { ToastContainer } from 'react-toastify'
import STYLE from '../css/navbar.module.css'
import LOGO from '../images/logo.jpg'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    
    <div className={STYLE.navbar}>
      <ToastContainer/>
      <div className={STYLE.logo}>
<img src={LOGO} alt="Company Logo" srcset="" />
      </div>

      <div className={STYLE.list} >
        <ul>
          
          <li><Link to="/">Products</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
          <li><Link to="/">services</Link></li>
          <li><Link to='/signup'>SignUp</Link></li>
        </ul>
      </div>
      </div>
    
  )
}

export default NavBar
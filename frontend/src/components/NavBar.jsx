import React from 'react'
import { ToastContainer } from 'react-toastify'
import STYLE from '../css/navbar.module.css'
import LOGO from '../images/logo.jpg'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const navigate=useNavigate()
  const cart=useSelector((state)=>state.cart)
  
 

  return (
    
    <div className={STYLE.navbar}>
      <ToastContainer/>
      <div className={STYLE.logo}>
<img src={LOGO} srcSet={LOGO} alt="Company Logo"  />
      </div>

      <div className={STYLE.list} >
        <ul>
          
          <li><Link to="/">Products</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
          <li><Link to="/">services</Link></li>
          <li><Link to='/signup'>SignUp</Link></li>
          <h6 onClick={()=>navigate("/cart")} style={{cursor:"pointer"}}>Cart Items:{cart.length}</h6>
        </ul>
      </div>
      </div>
    
  )
}

export default NavBar
import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import STYLE from '../css/navbar.module.css'
import LOGO from '../images/logo.jpg'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { getAllCartItems } from '../store/cartSlicer'

const NavBar = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const carts=useSelector((state)=>state.cart)
useEffect(()=>{

dispatch(
  getAllCartItems()
)

},[dispatch,carts])
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
          <h6 onClick={()=>navigate("/cart")} style={{cursor:"pointer"}}>Cart Items:{carts.length}</h6>
        </ul>
      </div>
      </div>
    
  )
}

export default NavBar
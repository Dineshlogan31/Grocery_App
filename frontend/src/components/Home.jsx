import React from 'react'
// import img from '../images/background imagen home.jpg'
import NavBar from "./NavBar"
import STYLE from '../css/home.module.css'
import Products from './Products'

const Home = () => {
  return (
    <div className={STYLE.home}>
<NavBar/>
<Products/>
    </div>
  )
}

export default Home
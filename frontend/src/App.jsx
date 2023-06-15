import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home';
import Cart from './components/Cart';
import Card from './components/Card';

import "./App.css"

const App = () => {
  return (
   
    <>
     <ToastContainer/>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login'  element={<Login />}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/card' element={<Card/>}/>
            </Routes>
        </Router>
    </>
    
  )
}

export default App
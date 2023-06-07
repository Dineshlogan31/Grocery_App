import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home';
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
            </Routes>
        </Router>
    </>
    
  )
}

export default App
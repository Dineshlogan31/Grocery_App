import React, { useState } from 'react'
import axios from 'axios'

import {MDBInput,MDBRow,MDBCol,MDBCheckbox,MDBBtn} from 'mdb-react-ui-kit'

import STYLE from '../css/login.module.css'
import {useNavigate} from 'react-router-dom'



const Signup = () => {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [error,setError]=useState(null)
  const [msg,setMsg]=useState(null)

    const navigate=useNavigate()


const handleSubmit= (e)=>{
  e.preventDefault()
      //Signup using axios
 axios.post("http://localhost:5000/signup",{
  email:email,
  password:password
}).then((response)=>{
  setMsg(response.data.Message)
  navigate("/login")
 })
  .catch((err)=>{
     if(err)
     {
      setError(err.response.data.error)
     }
})
}

    const handleNavigate=()=>{
        navigate("/login")
    }
  return (
    <div className={STYLE.LoginForm}>
    <h2>SignUp</h2>
    <form onSubmit={handleSubmit}>
  <MDBInput className='mb-4' type='text' id='form1Example1' label='Email address' onChange={(e)=>{setEmail(e.target.value)}} />
  <MDBInput className='mb-4' type='password' id='form1Example2' label='Password' onChange={(e)=>{setPassword(e.target.value)}} />

  <MDBRow className='mb-4'>
    <MDBCol className='d-flex justify-content-center'>
      <MDBCheckbox id='form1Example3' label='Remember me'  />
    </MDBCol>
    <MDBCol>
      <a href='/'>Forgot password?</a>
    </MDBCol>
  </MDBRow>

  <MDBBtn type='submit' block>
    Sign up
  </MDBBtn>
  <MDBRow className='mb-4'>
      <MDBCol className='d-flex justify-content-center'>
          <span  onClick={handleNavigate}>Already have account?Login</span>
        </MDBCol>
      </MDBRow>
     {error && <div className={STYLE.error} style={{color:"red"}}>{error}</div>}
     {msg && <div className={STYLE.success} >{msg}</div>}
</form>
</div>
  )
}

export default Signup
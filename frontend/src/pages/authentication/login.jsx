import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const navigate = useNavigate()
  const signin = async (event) =>{
    event.preventDefault()
    try {
      await axios.post("http://localhost:3001/auth/login", {
        email,
        password
      })
      navigate("/contactPages")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <h1> Logo</h1>
      <h3> Enter your credentials to access your account </h3>
      <div className='user-ID'>
        <input type="email" id='user-id' value={email} placeholder="User ID" onChange={(event)=>{setEmail(event.target.value)}}/>
      </div>
      <div className='user-password'>
        <input type="password" id='user-password' value={password} placeholder="User ID" onChange={(event)=>{setPassword(event.target.value)}}/>
      </div>
      <button onClick={signin} type="submit"> Sign in </button>
    </div>
  )
}
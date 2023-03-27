import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const signin = () =>{
    try {
      
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <h1> Logo</h1>
      <h3> Enter your credentials to access your account </h3>
      <div className='user-ID'>
        <input type="email" id='user-id' value={userId} placeholder="User ID" onChange={(event)=>{setUserId(event.target.valule)}}/>
      </div>
      <div className='user-password'>
        <input type="password" id='user-password' value={password} placeholder="User ID" onChange={(event)=>{setPassword(event.target.value)}}/>
      </div>
      <button onClick={signin} type="submit"> Sign in </button>
    </div>
  )
}
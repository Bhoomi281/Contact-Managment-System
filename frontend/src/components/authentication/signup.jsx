import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirm_password, setconfirm_password] = useState("")

  const navigate = useNavigate()


  const onsubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post("http://localhost:3001/auth/signup", {
        email,
        password,
        confirm_password
      })
      alert("Registration successfull..!");
      navigate("/")
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div>
      <form>
        <h1> Logo </h1>
        <h3> Create New Account</h3>
        <div className='email'>
          <input type="email" id='email' value={email} placeholder="Mail ID" onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className='create-password'>
          <input type="password" id='password' value={password} placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} />
        </div>
        <div className='confirm-password'>
          <input type="password" id='confirm-password' value={confirm_password} placeholder="Confirm-password" onChange={(event) => { setconfirm_password(event.target.value) }} />
        </div>
        <button type='submit' onClick={onsubmit}> Sign Up</button>
      </form>
    </div>
  )
}

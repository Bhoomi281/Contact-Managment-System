import React from 'react'
import { useState } from 'react';

export default function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const onsubmit = () =>{
    
  }
  return (
    <div>
      <form>
        <h1> Logo </h1>
        <h3> Create New Account</h3>
        <div className='email'>
          <input type="email" id='email' value={email} placeholder="Mail ID" onChange={(event)=>setEmail(event.target.value)}/>
        </div>
        <div className='create-password'>
        <input type="password" id='password' value={password} placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}}/>
        </div>
        <div className='confirm-password'>
        <input type="password" id='confirm-password' value={confirmPassword} placeholder="Confirm-password" onChange={(event)=>{setConfirmPassword(event.target.value)}}/>
        </div>
        <button type='submit' onClick={onsubmit}> Sign Up</button>
      </form>
    </div>
  )
}

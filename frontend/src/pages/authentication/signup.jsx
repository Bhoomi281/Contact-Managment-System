
import React from 'react'
import { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  return (
    <div>
      <form>
        <h1> Logo </h1>
        <h3> Create a accoutn</h3>
        <div className='mail'>
          <label htmlFor="email"> Email: </label>
          <input type="email" id='email' value={email}/>
        </div>
        <div className='create-password'>

        </div>
      </form>
    </div>
  )
}


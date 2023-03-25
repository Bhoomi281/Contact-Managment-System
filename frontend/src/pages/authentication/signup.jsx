<<<<<<< HEAD
import React from 'react'
import { useState } from 'react';

export default function SingUp() {
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
=======
>>>>>>> b3f0e2662ba75745942cbb00edbffffc59bad696

import React from 'react'
import Login from './login'
import SingUp from './signup'
import { Link } from 'react-router-dom'
export default function Auth() {
  return (
    <div>
        <Login />
        <Link to="/signup">Sing up</Link>
    </div>
  )
}
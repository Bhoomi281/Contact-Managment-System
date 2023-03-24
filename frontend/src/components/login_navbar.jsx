import React from 'react'
import Login from '../pages/authentication/login'
import SingUp from '../pages/authentication/signup'
import { Link } from 'react-router-dom'

export default function Login_navbar() {
  return (
    <div>
        <Login />
        <Link to="/signup">SignUP</Link>
    </div>
  )
}

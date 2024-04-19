import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../assets/logo.png'
import './Login.css'

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const [passwordError, setPasswordError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault()

    loginWithRedirect();
  }
  
  return (
    <div className="login--container">
      <img className="logo" src={logo} alt="Logo" />
      <h2 className="login--header">Login</h2>

      <form onSubmit={handleLogin} className="login-form">
       
        <button className="login-button" type="submit">
          Login
        </button>
        <Link to="/signup">Don't have an account? Sign up!</Link>
      </form>
    </div>
  )
}

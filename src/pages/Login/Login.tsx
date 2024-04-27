import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import logo from '../../assets/logo.png'
import LoginService from '../../services/LoginService'
import { TokenService } from '../../services/TokenService'

export const Login = () => {

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()

    const response = await LoginService.LoginUser({ username, password, artist })

    console.log('response', response)
    console.log('response', response.user, response.token)

    if (response) {
      window.localStorage.setItem('userLogged', JSON.stringify(response.user))
      window.localStorage.setItem('token', JSON.stringify(response.token))
      TokenService.setToken(response.token)
      const navigate = useNavigate()
      navigate('/')
    }
  }

  const [passwordError, setPasswordError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [artist, setArtist] = useState(false)

  const validateEmail = (input: string) => {
    if (input.trim() === '') {
      setEmailError('Email or username is required')
    } else {
      setEmailError('')
    }
  }

  const validatePassword = (input: string) => {
    if (input.length < 6) {
      setPasswordError('Password must be at least 6 characters')
    } else if (!/[A-Z]/.test(input)) {
      setPasswordError('Password must contain at least one uppercase letter')
    } else if (!/[\W_]/.test(input)) {
      setPasswordError('Password must contain at least one special character')
    } else {
      setPasswordError('')
    }
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleUsernameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleUsernameChange(event)
    validateEmail(event.target.value)
  }

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handlePasswordChange(event)
    validatePassword(event.target.value)
  }

  return (
    <div className="login--container">
      <img className="logo" src={logo} />
      <h2 className="login--header">Login</h2>

      <form onSubmit={handleLogin} className="login-form">
        <input
          className="login-input"
          type="text"
          value={username}
          id="email"
          placeholder="email or username"
          onChange={handleUsernameInputChange}
        />
        <input
          className="login-input"
          type="password"
          value={password}
          id="password"
          placeholder="password"
          onChange={handlePasswordInputChange}
        />
        <input type="checkbox" onChange={() => setArtist(!artist)} id="artist" /> Artist
        {passwordError && <div className="error-password">{passwordError}</div>}
        {emailError && <div className="error-email">{emailError}</div>}
        <button className="login-button" style={{ height: '30px' }} type="submit">
          Login
        </button>
        <Link to="/signup">Don't have an account? Sign up!</Link>
      </form>
    </div>
  )
}

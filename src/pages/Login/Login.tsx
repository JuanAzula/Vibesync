import { useState } from 'react'
import { getUsers as fetchUsers } from '../../services/dataService'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import './Login.css'
import logo from '../../assets/logo.png'

export const Login = () => {
  const userQuery = useQuery({
    queryKey: ['user'],
    queryFn: async () => await fetchUsers()
  })

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()

    if (username && password) {
      const user = userQuery.data.find(
        (user: { email: string, password: string }) => {
          return user.email === username && user.password === password
        }
      )
      if (user !== undefined) {
        window.localStorage.setItem('userLogged', JSON.stringify(user))
        window.location.reload()
      } else {
        alert('Invalid username or password')
      }
    }
  }

  const [passwordError, setPasswordError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
        {passwordError && <div className="error-password">{passwordError}</div>}
        {emailError && <div className="error-email">{emailError}</div>}
        <button className="login-button" style={{ height: '30px' }} type="submit">
          Login
        </button>
        <Link to="/signup">Don`t have an account?Signup</Link>
      </form>
    </div>
  )
}

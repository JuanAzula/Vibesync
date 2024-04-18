import { useState } from 'react'
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

    // No necesitas validar usuario y contraseña localmente,
    // ya que Auth0 manejará la autenticación.
    // Simplemente llama a loginWithRedirect para redirigir al usuario al flujo de autenticación de Auth0.
    loginWithRedirect();
  }

  const handleUsernameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsername(event.target.value)
  }

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value)
  }

  return (
    <div className="login--container">
      <img className="logo" src={logo} alt="Logo" />
      <h2 className="login--header">Login</h2>

      <form onSubmit={handleLogin} className="login-form">
        {/* No necesitas estos campos de entrada para usuario y contraseña */}
        {/* simplemente llama a loginWithRedirect al hacer clic en el botón de inicio de sesión */}
        {/* <input
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
        /> */}
        {/* No necesitas mostrar errores de validación aquí */}
        {/* {passwordError && <div className="error-password">{passwordError}</div>}
        {emailError && <div className="error-email">{emailError}</div>} */}
        <button className="login-button" type="submit">
          Login
        </button>
        <Link to="/signup">Don't have an account? Sign up!</Link>
      </form>
    </div>
  )
}

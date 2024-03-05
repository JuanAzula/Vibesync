import { useState } from 'react'
import { getUsers as fetchUsers } from '../services/dataService'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { validatePassword } from '../utils/utils'

interface LoginProps {
  triggerRefetch: () => void
}
export const Login: React.FC<LoginProps> = ({ triggerRefetch }) => {
  
  const userQuery = useQuery({
    queryKey: ['user'],
    queryFn: async () => await fetchUsers()
  })

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()

    if (username && password) {
      console.log(username, password)
      const user = userQuery.data.find((user: { email: string, password: string }) => {
        return user.email === username && user.password === password
      })
      console.log(userQuery.data)
      if (user !== undefined) {
        console.log(user)
        window.localStorage.setItem('userLogged', JSON.stringify(user));
        // window.location.reload()
        console.log('userLogged', window.localStorage.getItem('userLogged'))
        triggerRefetch();
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

  

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleUsernameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleUsernameChange(event)
    validateEmail(event.target.value)
  }

  const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handlePasswordChange(event)
    validatePassword(event.target.value)
  }

  return (
          <div className='login--container'>
              <h1 className='login--header'>Login</h1>

              <form onSubmit={handleLogin} className="login-form">
                  <input
                      className='input'
                      type="text"
                      value={username}
                      id="email"
                      placeholder="email or username"
                      onChange={handleUsernameInputChange}

                  />
                  <input
                      className='input'
                      type="password"
                      value={password}
                      id="password"
                      placeholder="password"
                      onChange={handlePasswordInputChange}
                  />
                  {passwordError && <div className="error-password">{passwordError}</div>}
                  {emailError && <div className="error-email">{emailError}</div>}
                  <button className='button' style={{ height: '30px' }} type="submit">Login</button>
                  <Link to="/signup">Don`t have an account?Signup</Link>

              </form>
          </div>
  )
}

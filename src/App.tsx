import './styles/App.css'
import { useQuery } from '@tanstack/react-query'
import { getTracks } from './services/dataService'
import { AppRoutes } from './router/AppRoutes'
import { Login } from './pages/Login'
// import { Home } from './pages/Home'
// import { useNavigate } from 'react-router-dom'

const getUser = () => {
  const loggedUserJSON = window.localStorage.getItem('userLogged')
  console.log('user', loggedUserJSON)
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    return user
  }
}

export const App = () => {
  const query = useQuery({
    queryKey: ['tracks'],
    queryFn: async () => await getTracks()
  })

  const queryUserLogged = useQuery({
    queryKey: ['user'],
    queryFn: async () => getUser()
  })

  console.log(query.data)

  return (
    <>
    {
      queryUserLogged.data
        ? <>
          <AppRoutes />
        </>
        : <Login/>
    }
    </>
  )
}

export default App

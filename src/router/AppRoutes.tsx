import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { useQuery } from '@tanstack/react-query'
import { Signup } from '../pages/Signup'

const getUsers = () => {
  const loggedUserJSON = window.localStorage.getItem('userLogged')
  console.log('user', loggedUserJSON)
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    console.log('loggedUser', user)
    return user
  }
}
export const AppRoutes = () => {
  const queryUserLogged = useQuery({
    queryKey: ['userLogged'],
    queryFn: async () => getUsers()
  })

  const handleLoginSuccess = () => {
    queryUserLogged.refetch()
    console.log(queryUserLogged.data)
  }
  console.log(queryUserLogged.data)
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                 element={ queryUserLogged.data ? <Home /> : <Signup triggerRefetch={handleLoginSuccess} />}
                 />
                <Route path="/login"
                 element={<Login triggerRefetch={handleLoginSuccess} />}
                 />
                 <Route path="/signup"
                 element={<Signup triggerRefetch={handleLoginSuccess} />}
                 />
                {/* <Route path="/register"
                //  element={<Register />}
                 /> */}
            </Routes>
        </BrowserRouter>
  )
}

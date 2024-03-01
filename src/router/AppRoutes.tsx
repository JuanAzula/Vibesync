import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { useQuery } from '@tanstack/react-query'

const getUsers = () => {
  const loggedUserJSON = window.localStorage.getItem('userLogged')
  console.log('user', loggedUserJSON)
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    console.log('loggedUser', user)
    return user
  }
  // else {
  //   return 'nothing'
  // }
}
export const AppRoutes = () => {
  const queryUserLogged = useQuery({
    queryKey: ['userLogged'],
    queryFn: async () => getUsers()
  })
  window.localStorage.clear()
  console.log(queryUserLogged.data)
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                 element={ queryUserLogged.data ? <Home /> : <Login />}
                 />
                <Route path="/login"
                 element={<Login />}
                 />
                {/* <Route path="/register"
                //  element={<Register />}
                 /> */}
            </Routes>
        </BrowserRouter>
  )
}

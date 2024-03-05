import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home/index'
import { useQuery } from '@tanstack/react-query'
import Navbar from '../components/bottomNavbar/Navbar'
import { SongPage } from '../pages/SongPage'
import SearchPage from '../pages/SearchPage'
import { useAudioContext } from '../hooks/useAudio'
import { UserPage } from '../pages/UserPage'
import LibraryPage from "../pages/LibraryPage";

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
  const { audioRef, audioUrl } = useAudioContext()
  const queryUserLogged = useQuery({
    queryKey: ['userLogged'],
    queryFn: async () => getUsers()
  })

  const handleLoginSuccess = () => {
    void queryUserLogged.refetch()
    console.log(queryUserLogged.data)
  }
  console.log(queryUserLogged.data)
  return (
    <BrowserRouter>
        <audio ref={audioRef} src={audioUrl || {}} />
      <Routes>
        <Route
          path="/"
          element={
            queryUserLogged.data
              ? (
              <Home user={queryUserLogged.data} />
                )
              : (
              <Login triggerRefetch={handleLoginSuccess} />
                )
          }
        />
        <Route path="/tracks/:trackId" element={<SongPage/>} />

        <Route
          path="/register"
          //  element={<Register />}
        />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/user" element={<UserPage user={queryUserLogged.data} />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  )
}

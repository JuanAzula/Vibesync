import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login/Login'
import { Home } from '../pages/Home/index'
import { useQuery } from '@tanstack/react-query'
import Navbar from '../components/bottomNavbar/Navbar'
import { SongPage } from '../pages/SongPage'
import SearchPage from '../pages/SearchPage'
import { useAudioContext } from '../hooks/useAudio'
import { UserPage } from '../pages/UserPage'
import LibraryPage from '../pages/LibraryPage'
import { MiniPlayer } from '../components/miniPlayer/MiniPlayer'
import { ConfigPage } from '../pages/ConfigPage/ConfigPage'
import { Signup } from '../pages/SignUp/Signup'
import { FavTracks } from '../pages/FavTracksPage/FavTracks'
// import { SkeletonTheme } from 'react-loading-skeleton'
import { SkeletonTheme } from 'react-loading-skeleton'
import { getTracks as fetchTracks } from '../services/dataService'

const getUsers = () => {
  const loggedUserJSON = window.localStorage.getItem('userLogged')
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    return user
  }
}

const getAllTracks = async () => {
  const tracks = await fetchTracks()
  return tracks
}
export const AppRoutes = () => {
  const { audioRef, audioUrl } = useAudioContext()

  const queryUserLogged = useQuery({
    queryKey: ['userLogged'],
    queryFn: async () => getUsers()
  })

  const queryAllTracks = useQuery({
    queryKey: ['tracks'],
    queryFn: async () => await getAllTracks()
  })
  localStorage.setItem('allTracks', JSON.stringify(queryAllTracks.data))
  const handleLoginSuccess = () => {
    void queryUserLogged.refetch()
  }
  return (
    <SkeletonTheme baseColor='#1C1C26' highlightColor='#222230'>
    <BrowserRouter>
      <audio ref={audioRef} src={audioUrl || {}} />
      {queryUserLogged.data
        ? (
        <>
          <Navbar />
          <MiniPlayer />

        </>
          )
        : null}
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
        <Route
          path="/login"
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
        <Route path="/tracks/:trackId" element={<SongPage />} />
        <Route
          path="/config"
          element={
            queryUserLogged.data
              ? (
              <ConfigPage
                triggerRefetch={handleLoginSuccess}
                user={queryUserLogged.data}
              />
                )
              : (
              <Login triggerRefetch={handleLoginSuccess} />
                )
          }
        />
        {/* <Route path="/login"
                 element={<Login />}
                 /> */}
        <Route
          path="/register"
          //  element={<Register />}
        />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/library/favtracks" element={<FavTracks/>} />
        <Route
          path="/user"
          element={<UserPage user={queryUserLogged.data} />}
        />
        <Route
          path="/profile"
          element={<UserPage user={queryUserLogged.data} />}
        />
        <Route
          path="/signup"
          element={<Signup triggerRefetch={handleLoginSuccess} />}
        />
      </Routes>
    </BrowserRouter>
    </SkeletonTheme>
  )
}

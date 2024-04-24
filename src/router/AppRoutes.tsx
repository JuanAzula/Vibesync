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
import { TracksPage } from '../pages/TracksPage'
import { SkeletonTheme } from 'react-loading-skeleton'
import { getTracks as fetchTracks } from '../services/dataService'
import { PlaylistPage } from '../pages/PlaylistPage'
import { Toaster, toast } from 'sonner'

const getUsers = () => {
  const loggedUserJSON = window.localStorage.getItem('userLogged')
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    toast('Welcome back!')
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
        <Toaster position='top-right' closeButton={true} richColors />
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
                  <Login />
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
                  <Login />
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
                    user={queryUserLogged.data}
                  />
                )
                : (
                  <Login />
                )
          }
        />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/library/playlists" element={<PlaylistPage />} />
        <Route path="/library/tracks" element={<TracksPage/>} />
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

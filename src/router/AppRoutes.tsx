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
import { TracksService } from '../services/TracksService'
import { PlaylistPage } from '../pages/PlaylistPage'
import { Toaster, toast } from 'sonner'
import { TokenService } from '../services/TokenService'
import { token } from '../services/TokenService'
import { PlaylistService } from '../services/PlaylistService'
import { AlbumService } from '../services/AlbumService'
import { ArtistService } from '../services/ArtistService'

const localToken = window.localStorage.getItem('token')
TokenService.setToken(localToken)
const getUsers = () => {
  const loggedUserJSON = window.localStorage.getItem('userLogged')
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    // TokenService.setToken(user.token)
    toast('Welcome back!')
    return user
  }
}

const validateSession = async () => {
  const response = await TokenService.validateToken(token)
  console.log('response', response)
  if (response === true) console.log('true')
  if (response === false) {
    console.log('false')
    setTimeout(() => {
      validateSession()
    }, 1500)
  }
  return response

}

let countTracks = 0
const getAllTracks = async () => {
  const tracks = await TracksService.getTracks()
  if (!tracks && countTracks < 1) {
    // setTimeout(() => {

    getAllTracks()
    // }, 1500)
    countTracks++
  }
  if (!tracks) return null
  console.log('yepa', tracks)
  return tracks
}


let countPlaylist = 0
const getAllPlaylists = async () => {
  const playlists = await PlaylistService.getPlaylists()
  if (!playlists && countPlaylist < 1) {
    // setTimeout(() => {
    getAllPlaylists()

    // }, 1500)
    countPlaylist++
  }
  if (!playlists) return null
  return playlists
}

let countAlbum = 0
const getAllAlbums = async () => {
  const albums = await AlbumService.getAlbums()
  if (!albums && countAlbum < 1) {
    // setTimeout(() => {

    getAllAlbums()
    // }, 1500)
    countAlbum++
  }
  if (!albums) return null
  return albums
}

let countArtist = 0
const getAllArtists = async () => {
  const artists = await ArtistService.getArtists()
  if (!artists && countArtist < 1) {
    // setTimeout(() => {

    getAllArtists()
    // }, 1500)
    countArtist++
  }
  if (!artists) return null
  return artists
}

export const AppRoutes = () => {
  const { audioRef, audioUrl } = useAudioContext()

  const queryUserLogged = useQuery({
    queryKey: ['userLogged'],
    queryFn: async () => getUsers()
  })
  console.log('user', queryUserLogged?.data)
  const queryValidateSession = useQuery({
    queryKey: ['validateSession'],
    queryFn: async () => await validateSession()
  })
  console.log('validate', queryValidateSession?.data)

  const queryAllTracks = useQuery({
    queryKey: ['tracks'],
    queryFn: async () => await getAllTracks()
  })
  localStorage.setItem('allTracks', JSON.stringify(queryAllTracks.data))

  const queryPlaylists = useQuery({
    queryKey: ['playlists'],
    queryFn: async () => await getAllPlaylists()
  })

  const queryAlbums = useQuery({
    queryKey: ['albums'],
    queryFn: async () => await getAllAlbums()
  })

  const queryArtists = useQuery({
    queryKey: ['artists'],
    queryFn: async () => await getAllArtists()
  })
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
          <Route path="/search" element={
            queryUserLogged.data
              ? (
                <SearchPage />
              )
              : (
                <Login />
              )
          } />
          <Route path="/library" element={
            queryUserLogged.data
              ? (
                <LibraryPage />
              )
              : (
                <Login />
              )
          } />
          <Route path="/library/playlists" element={
            queryUserLogged.data
              ? (
                <PlaylistPage />
              )
              : (
                <Login />
              )
          } />
          <Route path="/library/tracks" element={
            queryUserLogged.data ? <TracksPage /> : <Login />} />
          <Route
            path="/user"
            element={queryUserLogged.data ? <UserPage user={queryUserLogged.data} /> : <Login />}
          />
          <Route
            path="/profile"
            element={queryUserLogged.data ? <UserPage user={queryUserLogged.data} /> : <Login />}
          />
          <Route
            path="/signup"
            element={
              queryUserLogged.data
                ? (
                  <Home user={queryUserLogged.data} />
                )
                : (
                  <Signup />
                )
            }
          />
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  )
}

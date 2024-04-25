import axios from 'axios'

const {VITE_BASE_URL} = import.meta.env

export const getTracks = async () => {
  console.log(VITE_BASE_URL)
  const response = await axios.get(VITE_BASE_URL + 'tracks')
  return response.data
}

export const getTrack = async (id: string) => {
  const response = await axios.get(VITE_BASE_URL + 'tracks/' + id)
  return response.data
}

export const getUsers = async () => {
  const response = await axios.get(VITE_BASE_URL + 'user')
  return response.data
}

export const getUser = async (id: number) => {
  const response = await axios.get(VITE_BASE_URL + 'user/' + id)
  return response.data
}

export const getArtists = async () => {
  const response = await axios.get(VITE_BASE_URL + 'artists')
  return response.data
}

export const getAlbums = async () => {
  const response = await axios.get(VITE_BASE_URL + 'albums')
  return response.data
}

export const getPlaylists = async () => {
  const response = await axios.get(VITE_BASE_URL + 'playlists')
  return response.data
}

import axios from 'axios'

const BASE_URL = 'http://localhost:3000/'

export const getTracks = async () => {
  const response = await axios.get(BASE_URL + 'tracks')
  return response.data
}

export const getUsers = async () => {
  const response = await axios.get(BASE_URL + 'user')
  return response.data
}

export const getPlaylists = async () => {
  const response = await axios.get(BASE_URL + 'playlists')
  return response.data
}

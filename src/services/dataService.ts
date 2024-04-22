// Services for jsonserver

import axios from 'axios'

const BASE_URL = 'http://localhost:3000/'

export const getTracks = async () => {
  const response = await axios.get(BASE_URL + 'tracks')
  return response.data
}

export const getTrack = async (id: string) => {
  const response = await axios.get(BASE_URL + 'tracks/' + id)
  return response.data
}

export const getUsers = async () => {
  const response = await axios.get(BASE_URL + 'user')
  return response.data
}

export const getUser = async (id: number) => {
  const response = await axios.get(BASE_URL + 'user/' + id)
  return response.data
}

export const getArtists = async () => {
  const response = await axios.get(BASE_URL + 'artists')
  return response.data
}

export const getAlbums = async () => {
  const response = await axios.get(BASE_URL + 'albums')
  return response.data
}

export const getPlaylists = async () => {
  const response = await axios.get(BASE_URL + 'playlists')
  return response.data
}

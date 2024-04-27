import axios from "axios"
import { token } from "../services/TokenService"

const { VITE_BASE_URL } = import.meta.env

export class PlaylistService {
    static async getPlaylists() {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(VITE_BASE_URL + '/playlists', config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async getPlaylist(userId: string, playlistId: string) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(VITE_BASE_URL + 'user/' + userId + '/playlists/' + playlistId, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async updatePlaylist(userId: string, playlistId: string, playlist: any) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.patch(VITE_BASE_URL + 'user/' + userId + '/playlists/' + playlistId, playlist, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async deletePlaylist(userId: string, playlistId: string) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.delete(VITE_BASE_URL + 'user/' + userId + '/playlists/' + playlistId, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async addTrackToPlaylist(userId: string, playlistId: string, trackId: string) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.post(VITE_BASE_URL + 'user/' + userId + '/playlists' + playlistId + '/addtrack', { trackId }, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async removeTrackFromPlaylist(userId: string, playlistId: string) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.delete(VITE_BASE_URL + 'user/' + userId + '/playlists' + playlistId + '/removetrack', config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}
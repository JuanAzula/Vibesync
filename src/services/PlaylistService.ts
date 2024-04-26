import axios from "axios"

const { VITE_BASE_URL } = import.meta.env

export class PlaylistService {
    static async getPlaylists() {
        try {
            const response = await axios.get(VITE_BASE_URL + '/playlists')
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async getPlaylist(userId: string, playlistId: string) {
        try {
            const response = await axios.get(VITE_BASE_URL + 'user/' + userId + '/playlists/' + playlistId)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async updatePlaylist(userId: string, playlistId: string, playlist: any) {
        try {
            const response = await axios.patch(VITE_BASE_URL + 'user/' + userId + '/playlists/' + playlistId, playlist)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async deletePlaylist(userId: string, playlistId: string) {
        try {
            const response = await axios.delete(VITE_BASE_URL + 'user/' + userId + '/playlists/' + playlistId)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async addTrackToPlaylist(userId: string, playlistId: string, trackId: string) {
        try {
            const response = await axios.post(VITE_BASE_URL + 'user/' + userId + '/playlists' + playlistId + '/addtrack', { trackId })
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async removeTrackFromPlaylist(userId: string, playlistId: string) {
        try {
            const response = await axios.delete(VITE_BASE_URL + 'user/' + userId + '/playlists' + playlistId + '/removetrack')
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}
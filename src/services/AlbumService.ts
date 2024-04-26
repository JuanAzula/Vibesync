import axios from "axios"
import { token } from "./TokenService"

const { VITE_BASE_URL } = import.meta.env

export class AlbumService {

    static async getAlbum(id: string) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(VITE_BASE_URL + 'albums/' + id, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async getAlbums() {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(VITE_BASE_URL + 'albums', config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    static async postAlbum(album: any) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.post(VITE_BASE_URL + 'albums', album, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async updateAlbums(id: string, album: any) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.patch(VITE_BASE_URL + 'albums/' + id, album, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async deleteAlbum(id: string) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.delete(VITE_BASE_URL + 'albums/' + id, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}
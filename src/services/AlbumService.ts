import axios from "axios"

const { VITE_BASE_URL } = import.meta.env

export class AlbumService {

    static async getAlbum(id: string) {
        try {
            const response = await axios.get(VITE_BASE_URL + 'albums/' + id)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async getAlbums() {
        try {
            const response = await axios.get(VITE_BASE_URL + 'albums')
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    static async postAlbum(album: any) {
        try {
            const response = await axios.post(VITE_BASE_URL + 'albums', album)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async updateAlbums(id: string, album: any) {
        try {
            const response = await axios.patch(VITE_BASE_URL + 'albums/' + id, album)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async deleteAlbum(id: string) {
        try {
            const response = await axios.delete(VITE_BASE_URL + 'albums/' + id)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}
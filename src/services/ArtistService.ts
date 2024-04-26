import axios from "axios"
import { token } from "./TokenService"

const baseUrl = 'http://localhost:3333/api/artists'
export class ArtistService {
    static async getArtists() {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(baseUrl, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async getArtist(id: string) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(baseUrl + id, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async postArtist(artist: any) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.post(baseUrl, artist, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async deleteArtist(id: string) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.delete(baseUrl + id, config)
            return response.
                data
        } catch (error) {
            console.log(error)
        }
    }
}

import axios from "axios"

const baseUrl = 'http://localhost:3333/api/artists'
export class ArtistService {
    static async getArtists() {
        try {
            const response = await axios.get(baseUrl)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async getArtist(id: string) {
        try {
            const response = await axios.get(baseUrl + id)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async postArtist(artist: any) {
        try {
            const response = await axios.post(baseUrl, artist)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async deleteArtist(id: string) {
        try {
            const response = await axios.delete(baseUrl + id)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}

import axios from "axios"

const { VITE_BASE_URL } = import.meta.env

export class TracksService {

    static async getTracks() {
        try {
            const response = await axios.get(VITE_BASE_URL + 'tracks')
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async getTrack(id: string) {
        try {
            const response = await axios.get(VITE_BASE_URL + 'tracks/' + id)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}
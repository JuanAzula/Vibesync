import axios from "axios"
import { token } from "./TokenService"

const { VITE_BASE_URL } = import.meta.env

export class TracksService {

    static async getTracks() {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(VITE_BASE_URL + 'tracks', config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async getTrack(id: string) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(VITE_BASE_URL + 'tracks/' + id, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}
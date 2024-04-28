import axios from "axios"
import { token } from "./TokenService"

const { VITE_BASE_URL } = import.meta.env

export class SearchService {
    static async search(searchTerm: string) {
        try {
            const config = {
                headers: {
                    Authorization: `${token}`
                }
            }
            const URL = `${VITE_BASE_URL}search/${searchTerm}`
            const response = await axios.get(URL, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}

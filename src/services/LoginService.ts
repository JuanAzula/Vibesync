import axios from 'axios'
const { VITE_BASE_URL } = import.meta.env

const baseUrl = VITE_BASE_URL + 'login'

export default class LoginService {
    static async LoginUser(logindata: any) {
        const response = await axios.post(baseUrl, logindata, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        })

        return response.data
    }
}

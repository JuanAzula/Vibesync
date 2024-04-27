import axios, { AxiosError } from 'axios'
import { TokenService } from './TokenService'
import { UserService } from './UserService'
import { toast } from 'sonner'
const { VITE_BASE_URL } = import.meta.env

let count = 0

const baseUrl = VITE_BASE_URL + 'login'

export default class LoginService {
    static async LoginUser(logindata: any) {
        const response = await axios.post(baseUrl, logindata, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        })
        return response.data
    }

    static async refreshToken() {
        try {
            const response = await axios.get(VITE_BASE_URL + 'refresh', { withCredentials: true })
            TokenService.setToken(response.data.accessToken)
            return response.data
        } catch (error: AxiosError | any) {
            if (error.request.status === 401 && count < 1) {
                toast.error('Session expired, please login again')
                UserService.logoutUser()
                count++
            }
        }
    }
}

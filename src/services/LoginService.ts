import axios, { AxiosError } from 'axios'
import { TokenService } from './TokenService'
import { UserService } from './UserService'
import { toast } from 'sonner'
const { VITE_BASE_URL } = import.meta.env

let count = 0

const baseUrl = VITE_BASE_URL + 'login'

setInterval(() => {
    if (window.localStorage.getItem('userLogged')) {
        console.log('still')
        LoginService.refreshToken()
    }
}, 1000 * 20)

export default class LoginService {
    static async LoginUser(logindata: any) {
        const response = await axios.post(baseUrl, logindata, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        })
        return response.data
    }

    static async refreshToken() {
        if (!window.localStorage.getItem('userLogged')) return
        try {
            const response = await axios.get(VITE_BASE_URL + 'refresh', { withCredentials: true })
            window.localStorage.setItem('token', response.data.accessToken)
            TokenService.setToken(response.data.accessToken)
            return response.data
        } catch (error: AxiosError | any) {
            if (error.request.status === 401 && count < 1) {
                toast.error('Session expired, please login again')
                UserService.logoutUser()
                count++
                setTimeout(() => {
                    window.location.reload()
                }, 3000)
            }
        }
    }
}

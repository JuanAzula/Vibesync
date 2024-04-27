import axios, { AxiosError } from "axios";
import LoginService from "./LoginService";

let token: string | null = null

const BASE_URL = 'http://localhost:3333/api/login/valid'

class TokenService {
    static async setToken(newToken: string | null) {
        token = `Bearer ${newToken}`
        return token
    }
    static async validateToken(token: string | null) {
        if (!window.localStorage.getItem('userLogged')) return
        try {
            const response = await axios.post(BASE_URL, { token });
            console.log('response', response)
            console.log('true')
            return true
        } catch (error: AxiosError | any) {
            if (error?.request.status === 401) {
                console.log('false')
                const refreshResponse = await LoginService.refreshToken()
                TokenService.setToken(refreshResponse.accessToken)
                window.localStorage.setItem('token', refreshResponse.accessToken)
                return false
            }
        }
    }
}

export { TokenService, token }
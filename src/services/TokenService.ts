import axios from "axios";

let token: string | null = null

const BASE_URL = 'http://localhost:3333/api/login/valid'

class TokenService {
    static async setToken(newToken: string) {
        token = `Bearer ${newToken}`
    }
    static async validateToken(token: string) {
        try {
            const response = await axios.post(BASE_URL, { token });

            if (response.status === 200) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.error('Error validating token:', error)
            return false
        }
    }
}

export { TokenService, token }
import axios from 'axios'

const baseUrl = 'http://localhost:3333/api/login'

export default class LoginService {
    static async LoginUser(logindata: any) {
        const response = await axios.post(baseUrl, logindata, {
            headers: { 'Content-Type': 'application/json' }
        })
        return response.data
    }
}

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

    static async refreshToken() {
        // const refreshTokenRow = document.cookie.split('; ')
        //     .find(row => row.startsWith('refres'));

        // const refreshToken = refreshTokenRow ? refreshTokenRow.split('=')[1] : '';
        // const headers = {
        //     Cookies: `refreshToken=${refreshToken}`
        // };
        // console.log('REFRESH TOKEN: ' + refreshToken)
        const headers = {
            Cookie: 'qpasa'
        }
        const response = await axios.post(VITE_BASE_URL + 'refresh', { withCredentials: true })
        return response.data
    }
}

import axios from "axios"
import { token } from "../services/TokenService"

const { VITE_BASE_URL } = import.meta.env
export class UserService {
    static async getUsers() {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(VITE_BASE_URL, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async getUser(id: string) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.get(VITE_BASE_URL + id, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async patchUser(user: any, token: string | null) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.patch(VITE_BASE_URL + 'users', user, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    static async patchPassword(data: any, token: string | null) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.patch(VITE_BASE_URL + 'changepassword', data, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }


    static async postUser(user: any) {
        try {
            const response = await axios.post(VITE_BASE_URL + 'users', user)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async deleteUser(id: string, token: string | null) {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const response = await axios.delete(VITE_BASE_URL + id, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    static async logoutUser() {
        try {
            window.localStorage.removeItem('userLogged')
            window.localStorage.removeItem('token')
            window.localStorage.removeItem('countInterval')
        } catch (error) {
            console.log(error)
        }
    }
}

import axios from "axios"

const {VITE_BASE_URL} = import.meta.env

export class UserService {
    static async getUsers() {
        try {
            const response = await axios.get(VITE_BASE_URL)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async getUser(id: string) {
        try {
            const response = await axios.get(VITE_BASE_URL + id)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async patchUser(user: any) {
        try {
            const response = await axios.patch(VITE_BASE_URL + 'users/', user)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async postUser(user: any) {
        try {
            const response = await axios.post(VITE_BASE_URL, user)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async deleteUser(id: string) {
        try {
            const response = await axios.delete(VITE_BASE_URL + id)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}

import axios from "axios"

const baseUrl = 'http://localhost:3333/api/users'
export class UserService {
    static async getUsers() {
        try {
            const response = await axios.get(baseUrl)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async getUser(id: string) {
        try {
            const response = await axios.get(baseUrl + id)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async postUser(user: any) {
        try {
            const response = await axios.post(baseUrl, user)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    static async deleteUser(id: string) {
        try {
            const response = await axios.delete(baseUrl + id)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}

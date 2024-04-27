import axios from 'axios'
import { token } from './TokenService'
const baseUrl = 'http://localhost:3333/api/upload'

class UploadService {
    static async upload(file: any) {
        const formData = new FormData();
        formData.append('file', file);
        const config = {
            headers: {
                Authorization: token,
                'Content-Type': 'multipart/form-data'
            }
        }
        try {
            const response = await axios.post(baseUrl, formData, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export { UploadService }
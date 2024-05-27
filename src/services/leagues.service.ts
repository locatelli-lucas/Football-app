import { API } from './api'

export async function getLeagues() {
    try {
        const response = await API.get('/leagues')
        return response.data;
    } catch (error) {
        throw new Error("Error Unknown")
    }
}
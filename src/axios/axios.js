import axios from 'axios'

export const rootAPI = import.meta.env.VITE_ROOT_API + "/api/v1"

export const axiosProcesser = async ({ method, url, data }) => {
    try {
        const resp = await axios({ method, url, data })
        return resp.data
    } catch (error) {
        return {
            status: error,
            message: error.message
        }
    }
}
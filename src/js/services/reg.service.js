import axios from '../plugins/axios';

export async function reg(send) {
    try {
        const response = await axios.post('/auth/signup', send);
        return response.data
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
}
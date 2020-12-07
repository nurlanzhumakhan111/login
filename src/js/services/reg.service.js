import axios from '../plugins/axios';

export async function reg(email, password) {
    try {
        const response = await axios.post('/auth/signup', JSON.stringify({
            regEmail,
            regPassword,
            regNickname,
            regFirstName,
            regLastName,
            regPhone,
            regGender,
            regCountry,
            regCity,
            regRadio
        }));
        return response.data
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
}
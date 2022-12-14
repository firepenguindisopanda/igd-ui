import axios from 'axios';
const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
    async login(username, password) {
        const response = await axios.post(API_URL + 'signin', { username, password });
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem('user');
    }

    async register(username, email, password) {
        const response = await axios.post(API_URL + 'signup', { username, email, password });
        return response.data;
    }
}

export default new AuthService();
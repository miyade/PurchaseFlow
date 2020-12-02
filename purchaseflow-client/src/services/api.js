import axios from 'axios';

const api = axios.create({
    baseURL:'https://testapi.numan.com'
})

export default api;
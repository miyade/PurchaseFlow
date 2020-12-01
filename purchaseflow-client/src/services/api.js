import axios from 'axios';

const api = axios.create({
    baseUrl:'https://testapi.numan.com'
})

export default api;
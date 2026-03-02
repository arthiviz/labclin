import axios from "axios";

const api = axios.create({
    baseURL: 'https://labclin.onrender.com'
})

export default api;
import axios from "axios";

const api = axios.create({
    baseURL: 'https://labclin.onrender.com:8080'
})

export default api;
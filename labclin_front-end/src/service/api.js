import axios from "axios";

const api = axios.create({
    baseURL: 'https://labclin.onrender.com'
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

// No seu api.js
let isRedirecting = false;

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const isLoginPage = window.location.pathname === "/login";

        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            // SÓ age se NÃO estiver na página de login e NÃO estiver já redirecionando
            if (!isLoginPage && !isRedirecting) {
                isRedirecting = true;
                localStorage.removeItem("token");
                
                // Use o replace para a página de login
                window.location.replace("/login");
            }
        }
        return Promise.reject(error);
    }
);

export default api;
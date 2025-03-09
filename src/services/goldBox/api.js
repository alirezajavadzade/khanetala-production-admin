import axios from "axios";


const GoldBoxTemplate = axios.create({
    baseURL: "https://khaneetala.ir/api/admin",
    // timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
})


// before request
GoldBoxTemplate.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


// after response
GoldBoxTemplate.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status == 401) {
            localStorage.removeItem("token");
            router.push('/login');
        }
        console.error("API Error:", error.response || error.message);
        return Promise.reject(error);
    }
);

export default GoldBoxTemplate;

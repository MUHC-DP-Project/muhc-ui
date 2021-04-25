import axios from 'axios';

const projectAxios = axios.create({baseURL: 'http://localhost:8080'});

const userAxios = axios.create({baseURL: 'http://localhost:8081'});
userAxios
    .interceptors
    .request
    .use(function (config) {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token
            ? `Bearer ${token}`
            : '';
        return config;
    });
projectAxios
    .interceptors
    .request
    .use(function (config) {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token
            ? `Bearer ${token}`
            : '';
        return config;
    });
export {projectAxios, userAxios};

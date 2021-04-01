import axios from 'axios';


const projectAxios = axios.create({
    baseURL: process.env.REACT_APP_PROJECT_SERVER_URL 
});

const userAxios = axios.create({
    baseURL: process.env.REACT_APP_USER_SERVER_URL
});

userAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });
projectAxios.interceptors.request.use(function (config) {
const token = localStorage.getItem('token');
config.headers.Authorization =  token ? `Bearer ${token}` : '';
return config;
});
export {projectAxios,userAxios};
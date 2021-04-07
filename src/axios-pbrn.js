import axios from 'axios';


const projectAxios = axios.create({
    baseURL: 'https://pbrn-projects.herokuapp.com/' 
});

const userAxios = axios.create({
    baseURL: 'https://pbrn-users.herokuapp.com/'
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

import axios from 'axios';


const projectAxios = axios.create({
    baseURL: process.env.REACT_APP_PROJECT_SERVER_URL 
});

const userAxios = axios.create({
    baseURL: process.env.REACT_APP_USER_SERVER_URL
});
const token = localStorage.getItem('token');
userAxios.defaults.headers.common['Authorization']=token;
export {projectAxios,userAxios};
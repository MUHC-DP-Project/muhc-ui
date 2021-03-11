import axios from 'axios';


const projectAxios = axios.create({
    baseURL: process.env.REACT_APP_PROJECT_SERVER_URL 
});

const userAxios = axios.create({
    baseURL: process.env.REACT_APP_USER_SERVER_URL
});

export {projectAxios,userAxios};
import axios from 'axios';
console.log('DB NAME :',process.env);
const instance=axios.create({
    baseURL:process.env.REACT_APP_SERVER_URL
});

export default instance;
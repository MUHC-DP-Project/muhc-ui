import axios from 'axios';
console.log('DB NAME :',process.env);
const instance=axios.create({
    baseURL:process.env.REACT_APP_MONGO_DB_URI 
});

export default instance;
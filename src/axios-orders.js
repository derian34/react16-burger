import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bda94.firebaseio.com/'
});

export default instance;
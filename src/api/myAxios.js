import axios from 'axios';
// npm install qs
import qs from 'qs';

const instance = axios.create({
    timeout: 5000,
});

instance.interceptors.request.use((config) =>{
    const {method,data} = config

    if(method.toLowerCase() === 'post') {
        if(data instanceof Object) {
            config.data = qs.stringify(data)
        }
    }
    return config
});

instance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        console.log(error)
        return new Promise(()=>{})
    }
);
export default instance
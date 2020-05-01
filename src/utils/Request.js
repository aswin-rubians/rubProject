import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.nasa.gov/neo/rest/v1/neo',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
});

instance.interceptors.response.use(({ data }) => data, (error) => Promise.reject(error));

export default ({
    method = 'GET',
    url = '',
    body = {},
    params = {},
}) => instance({
    url,
    method,
    ...(method !== 'GET' ? { body } : { params }),
});
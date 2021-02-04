import axios from 'axios';

// Will assume axios.defaults from index.js, overriding anything that appears
// in this instance
const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;
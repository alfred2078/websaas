import axios from 'axios'

const service = new axios.create({
    baseURL:'',
    timeout:5000
})

export default service

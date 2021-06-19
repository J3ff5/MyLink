//key = fa9db9c373caf4d7bf5a0906b2774bf266862380
//base url = https://api-ssl.bitly.com/v4/  

import axios from 'axios'

export const key = 'fa9db9c373caf4d7bf5a0906b2774bf266862380'


const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4', 
    headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
    }
})

export default api

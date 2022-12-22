import axios from "axios"
export  const API_KEY = '2dc9d9d6da341a31a1f68bcbfe1780f6'

export const api = axios.create({
    baseURL : `https://api.themoviedb.org/3`
})


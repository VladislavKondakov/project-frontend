import axios from "axios";

const {VITE_API_URl} = process.env

const instance = axios.create({
    baseURL: VITE_API_URl
})

export default instance
import axios from "axios";

const API = axios.create({
    baseURL: "https://http://localhost:5278//api/"
});

export default API;


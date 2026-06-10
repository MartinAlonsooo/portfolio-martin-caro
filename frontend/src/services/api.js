import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-martin-caro.onrender.com/api/"
});

export default api;
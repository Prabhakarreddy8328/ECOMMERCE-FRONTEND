import axios from "axios";

const API = axios.create({
  baseURL: "ecommerce-backend-production-0972.up.railway.app/api"
});

export default API;

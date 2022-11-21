import axios from "axios";

export const api = axios.create({
    baseURL: "http://amazon-express.vitaoks1.repl.co"
});
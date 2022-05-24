import axios from "axios"

export default axios.create({
    baseURL: "http://localHost:8080/api",
    headers: {
        "Content-type": "application/json"
      }
});
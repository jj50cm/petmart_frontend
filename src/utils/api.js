import axios from "axios";

const token = JSON.parse(localStorage.getItem("userInfo"));
console.log(token != null ? token.accessToken : "Null token");

let accessToken = token != null ? token.accessToken : "Null token";

export const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    Authorization: 'Bearer ' + accessToken,
  },
});
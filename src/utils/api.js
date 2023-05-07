import axios from "axios";

const token = JSON.parse(localStorage.getItem("userInfo"));
console.log(token.accessToken);
export const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    Authorization: 'Bearer ' + token.accessToken,
  },
});
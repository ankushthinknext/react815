import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:2345",
  headers: {
    "Content-Type": "application/json",
    token: localStorage.getItem("token") || "",
  },
});

const httpFile = axios.create({
  baseURL: "http://localhost:2345",
  headers: {
    "Content-Type": "multipart/form-data",
    token: localStorage.getItem("token") || "",
  },
});
export { http, httpFile };

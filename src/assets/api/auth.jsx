import axios from "./axios";

export const registroRequest = (data) => axios.post("/tutorial", data);

export const loginRequest = (data) => axios.post("/access/login", data);


export const verifyToken = () => axios.get("/access/verify");

export const logoutRequest = () => axios.get("/access/logout");
import axios from "axios";

/*인증 필요 없는 요청*/
const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

/*인증 필요한 요청*/
const token = localStorage.getItem("token");
const auth = token ? `Bearer ${token.accessToken}` : null;
const apiAuth = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
  headers: { Authorization: auth },
  withCredentials: true,
});

export { api, apiAuth };

import axios from "axios";

/* 인증 필요 없는 요청 */
const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
});


/* 로컬스토리지에서 토큰 정보 가져오기*/
const storedToken = localStorage.getItem("token");
const tokenData = storedToken ? JSON.parse(storedToken) : null;
const accessToken = tokenData ? tokenData.accessToken : null;

const auth = accessToken ? `Bearer ${accessToken}` : null;

const apiAuth = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  headers: {
    Authorization: auth,
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export { api, apiAuth };

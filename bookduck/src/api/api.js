import axios from "axios";
import { postAccessTokenIssue } from "./oauth";
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

apiAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;
    if (!response) return Promise.reject(error);
    const { status, data } = response;

    /*무한 반복 방지*/
    if (config.sent) return Promise.reject(error);
    config.sent = true;

    switch (status) {
      case 401:
        switch (data.error) {
          case "Token Expired":
            try {
              await postAccessTokenIssue();
              const token = JSON.parse(localStorage.getItem("token"));
              apiAuth.defaults.headers.Authorization = `${token.grantType} ${token.accessToken}`;
              // 실패한 요청 재시도
              config.headers.Authorization = `${token.grantType} ${token.accessToken}`;
              return apiAuth(config);
            } catch (error) {
              localStorage.removeItem("token");
              window.location.href = "/login";
              return Promise.reject(error);
            }
          case "Invalid Token":
            localStorage.removeItem("token");
            window.location.href = "/login";
            return Promise.reject(error);
        }
    }

    return Promise.reject(error);
  }
);

export { api, apiAuth };

import axios from "axios";
import { postAccessTokenIssue } from "./oauth";

/* 로컬스토리지에서 토큰 정보 가져오기*/
const token = JSON.parse(localStorage.getItem("token"));
const accessToken = token?.accessToken || null;
const auth = accessToken ? `Bearer ${accessToken}` : null;

/* 인증 필요 없는 요청*/
export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
});

/*인증 필요한 요청*/
export const apiAuth = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  headers: {
    Authorization: auth,
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

/*응답 인터셉터*/
apiAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;
    if (!response) return Promise.reject(error);
    const { status, data } = response;

    // 무한 반복 방지 플래그 설정
    if (config.sent) {
      return Promise.reject(error);
    }
    config.sent = true;

    if (status === 401) {
      console.log(data.errorCode);
      switch (data.errorCode) {
        case "ACCESS_TOKEN_NOT_EXPIRED":
          console.error("액세스 토큰이 아직 만료되지 않았습니다.");
          return Promise.reject(error);

        case "EXPIRED_REFRESH_TOKEN":
          console.error("리프레시 토큰이 만료되었습니다. 로그아웃합니다.");
          localStorage.removeItem("token");

          return Promise.reject(error);

        case "INVALID_REFRESH_TOKEN":
          console.error("유효하지 않은 리프레시 토큰입니다. 로그아웃합니다.");
          localStorage.removeItem("token");

          return Promise.reject(error);

        case "NO_COOKIE":
          console.error("쿠키에 리프레시 토큰이 없습니다. 로그아웃합니다.");
          localStorage.removeItem("token");

          return Promise.reject(error);

        case "INVALID_TOKEN":
          console.error("유효하지 않은 토큰입니다. 로그아웃합니다.");
          localStorage.removeItem("token");

          return Promise.reject(error);

        case "EXPIRED_ACCESS_TOKEN":
          try {
            const res = await postAccessTokenIssue();
            console.log(res);
            const token = JSON.parse(localStorage.getItem("token"));

            apiAuth.defaults.headers.Authorization = `Bearer ${token.accessToken}`; // 새 토큰으로 기본 헤더 갱신
            config.headers.Authorization = `Bearer ${token.accessToken}`; // 실패한 요청의 헤더 갱신

            return apiAuth(config); // 재시도
          } catch (refreshError) {
            console.error("토큰 재발급 실패:", refreshError);

            return Promise.reject(refreshError);
          }

        default:
          return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

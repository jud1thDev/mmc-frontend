import { api, apiAuth } from "./api";
/*카카오에 인가코드 요청*/
const FRONT_DOMAIN = import.meta.env.VITE_API_BASE_URL;
export const KakaoURI = `${FRONT_DOMAIN}/oauth2/authorization/kakao`;

/*머메클 서버에 인가코드 주고 토큰을 받아서 localStorage에 set*/
export const getAccessTokenKakao = async (code) => {
  try {
    const response = await api.get(`/oauth2/authorization/kakao`, {
      params: { code: code },
    });
    const token = {
      accessToken: response.data.accessToken,
      grantType: response.data.grantType,
      expiresIn: new Date().getTime() + response.data.expiresIn,
    };
    localStorage.setItem("token", JSON.stringify(token));
  } catch (error) {
    localStorage.removeItem("token");
  }
};

/*엑세스 토큰 재발급*/
export const postAccessTokenIssue = async () => {
  try {
    const response = await apiAuth.post(`/auth/refresh`);
    const token = {
      accessToken: response.data.accessToken,
      grantType: response.data.grantType,
      expiresIn: new Date().getTime() + response.data.expiresIn,
    };
  } catch (error) {
    localStorage.removeItem("token");
    throw error;
  }
};

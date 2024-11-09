import { apiAuth } from "./api";
const BACK_DOMAIN = import.meta.env.VITE_API_BASE_URL;
export const KakaoURI = `${BACK_DOMAIN}/oauth2/authorization/kakao`;
export const GoogleURI = `${BACK_DOMAIN}/oauth2/authorization/google`;
/*토큰 만료 여부 확인*/
const isTokenExpired = () => {
  const expiresIn = localStorage.getItem("expiresIn");
  return expiresIn && new Date().getTime() > expiresIn;
};

/*엑세스 토큰 재발급*/
export const postAccessTokenIssue = async () => {
  if (!isTokenExpired()) {
    console.log("액세스 토큰이 아직 만료되지 않았습니다.");
    return;
  }
  try {
    const response = await apiAuth.post(`/auth/refresh`);
    const token = {
      accessToken: response.data.accessToken,
      expiresIn: new Date().getTime() + response.data.accessTokenMaxAge,
      isNewUser: false,
    };
    localStorage.setItem("token", JSON.stringify(token));
    return response;
  } catch (error) {
    localStorage.removeItem("token");
    localStorage.removeItem("token");
    throw error;
  }
};

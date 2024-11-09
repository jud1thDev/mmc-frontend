import { apiAuth } from "./api";
const BACK_DOMAIN = import.meta.env.VITE_API_BASE_URL;
export const KakaoURI = `${BACK_DOMAIN}/oauth2/authorization/kakao`;
export const GoogleURI = `${BACK_DOMAIN}/oauth2/authorization/google`;

/*엑세스 토큰 재발급*/
export const postAccessTokenIssue = async () => {
  try {
    const response = await apiAuth.post(`/auth/refresh`);
    console.log(response);
    const token = {
      accessToken: response.data.accessToken,
      expiresIn: new Date().getTime() + response.data.accessTokenMaxAge,
      isNewUser: false,
    };
  } catch (error) {
    localStorage.removeItem("token");
    throw error;
  }
};

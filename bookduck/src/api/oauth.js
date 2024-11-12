import { apiAuth } from "./api";
const BACK_DOMAIN = import.meta.env.VITE_API_BASE_URL;
export const KakaoURI = `${BACK_DOMAIN}/oauth2/authorization/kakao`;
export const GoogleURI = `${BACK_DOMAIN}/oauth2/authorization/google`;
/*토큰 만료 여부 확인*/
export const isTokenExpired = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const expiresIn = token?.expiresIn || null;
  return expiresIn && new Date().getTime() > expiresIn;
};

/*userId 가져오기*/
export const getUserId = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token?.userId || null;
};

/*엑세스 토큰 재발급*/
export const postAccessTokenIssue = async () => {
  if (!isTokenExpired()) {
    console.log("액세스 토큰이 아직 만료되지 않았습니다.");
    return;
  }
  try {
    /*기존 토큰 userId 가져오기*/
    const userId = getUserId();
    /*새 토큰 요청*/
    const response = await apiAuth.post(`/auth/refresh`);
    const token = {
      accessToken: response.data.accessToken,
      expiresIn: new Date().getTime() + response.data.accessTokenMaxAge * 1000,
      isNewUser: false,
      userId: userId,
    };
    /*새 토큰 로컬스토리지에 넣기*/
    localStorage.setItem("token", JSON.stringify(token));
    console.log("새로운 토큰 저장 완료");
    return response;
  } catch (error) {
    localStorage.removeItem("token");
    console.error("토큰 재발행 오류: ", error);
  }
};

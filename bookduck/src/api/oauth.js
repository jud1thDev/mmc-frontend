const CLIENT_ID = `${import.meta.env.VITE_KAKAO_REST_API_KEY}`;
const REDIRECT_URI = "http://localhost:3000/oauth2/authorization/kakao";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

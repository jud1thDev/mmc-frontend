import { requestFcmToken } from "../../api/fcm";
import { postFcmToken } from "../../api/fcmApi";

const handleFcmToken = async (userId) => {
  const isTokenSent = JSON.parse(localStorage.getItem("isFcmTokenSent"));
  console.log(isTokenSent);
  console.log("isTokenSent:", isTokenSent, "userId", userId);
  if (!isTokenSent && userId) {
    try {
      // 1. FCM 토큰 가져오기
      const fcmToken = await requestFcmToken();
      console.log(fcmToken);
      if (fcmToken) {
        // 2. 서버로 FCM 토큰 전송
        await postFcmToken(userId, fcmToken);
        localStorage.setItem("isFcmTokenSent", JSON.stringify(true));
      } else {
        console.error("FCM 토큰 가져오기 실패");
      }
    } catch (error) {
      console.error("FCM 처리 중 오류 발생:", error);
    }
  } else {
    console.log("FCM토큰이 이미 저장되었습니다.");
  }
};

export default handleFcmToken;

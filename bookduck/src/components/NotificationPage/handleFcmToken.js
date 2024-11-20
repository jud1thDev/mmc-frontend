import { requestFcmToken } from "../../api/fcm";
import { sendFcmToken } from "../../api/fcmApi";
const handleFcmToken = async (userId) => {
  try {
    // 1. FCM 토큰 가져오기
    const fcmToken = await requestFcmToken();

    if (fcmToken) {
      // 2. 서버로 FCM 토큰 전송
      await sendFcmToken(userId, fcmToken);
      console.log("FCM 토큰 서버로 전송 완료");
    } else {
      console.error("FCM 토큰 가져오기 실패");
    }
  } catch (error) {
    console.error("FCM 처리 중 오류 발생:", error);
  }
};

export default handleFcmToken;

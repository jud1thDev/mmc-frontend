import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";

export const requestFcmToken = async () => {
  try {
    // 서비스 워커 등록
    if ("serviceWorker" in navigator) {
      const registration = await navigator.serviceWorker.register(
        "/firebase-messaging-sw.js"
      );
      console.log("서비스 워커 등록 성공:", registration);

      // FCM 토큰 가져오기
      const fcmToken = await getToken(messaging, {
        vapidKey:
          "BNgk_Ef8j0KFLabeiH5K7GGsHz4BC00C05R3hzNA20CXGQ7YCCfCe0fx9FCHSdhlRj6DNlC90IrCqBiQW8_6KKw", // Firebase 콘솔에서 발급받은 VAPID 키
        serviceWorkerRegistration: registration,
      });

      if (fcmToken) {
        return fcmToken;
      } else {
        console.error("FCM 토큰을 가져오지 못했습니다.");
        return null;
      }
    } else {
      console.error("Service Worker가 지원되지 않는 환경입니다.");
      return null;
    }
  } catch (error) {
    console.error("FCM 토큰 요청 중 오류 발생:", error);
    return null;
  }
};

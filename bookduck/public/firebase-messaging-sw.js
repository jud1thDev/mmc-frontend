importScripts(
  "https://www.gstatic.com/firebasejs/9.20.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.20.0/firebase-messaging-compat.js"
);

Notification.requestPermission().then((permission) => {
  console.log("알림 권한:", permission);
});
// Firebase 초기화
const firebaseConfig = {
  apiKey: "AIzaSyDobXyNl2FmQpOJTcdu0cU6lIw6jZ4V4Dw",
  authDomain: "bookduck-3654b.firebaseapp.com",
  projectId: "bookduck-3654b",
  storageBucket: "bookduck-3654b.firebasestorage.app",
  messagingSenderId: "259472501168",
  appId: "1:259472501168:web:f0ce654387126e1f458e75",
  measurementId: "G-XNN57JYCHJ",
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("백그라운드 메시지 수신:", payload);

  const notificationTitle = payload.notification.title || "알림 제목 없음";
  const notificationOptions = {
    body: payload.notification.body || "알림 내용 없음",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("install", (event) => {
  console.log("Service Worker 설치됨");
  self.skipWaiting(); // 새 Service Worker를 즉시 활성화
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker 활성화됨");
  return self.clients.claim(); // 기존 클라이언트 제어
});

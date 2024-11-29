import React, { createContext, useContext, useEffect, useState } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";

// SSE Context 생성
const SSEContext = createContext(null);

// SSEProvider 컴포넌트
export const SSEProvider = ({ children }) => {
  // SSE 데이터 상태 관리
  const [sseData, setSseData] = useState({
    isCommonAlarmChecked: null,
    isAnnouncementChecked: null,
    isItemUnlockedChecked: null,
    isLevelUpChecked: null,
    isBadgeUnlockedChecked: null,
    newLevel: null,
    newBadgeInfo: null,
  });

  // SSE 연결 함수
  const initializeSSE = () => {
    console.log("SSE 초기화 시작...");

    // LocalStorage에서 토큰 가져오기
    const rawTokenData = localStorage.getItem("token");
    if (!rawTokenData) {
      console.error("LocalStorage에 토큰이 없습니다. SSE 초기화를 건너뜁니다.");
      return null;
    }
    const tokenData = JSON.parse(rawTokenData || "{}");
    const accessKey = tokenData?.accessToken;

    // Access Token 확인
    if (!accessKey) {
      console.error("Access key가 없습니다.");
      return null;
    }

    // EventSourcePolyfill 생성
    let eventSource;
    try {
      eventSource = new EventSourcePolyfill(
        "https://api.bookduck.kro.kr/alarms/subscribe",
        {
          headers: {
            Authorization: `Bearer ${accessKey}`,
          },
          heartbeatTimeout: 300000,
          withCredentials: true,
        }
      );
      console.log("EventSourcePolyfill 객체 생성 성공");
    } catch (error) {
      console.error("EventSourcePolyfill 생성 중 에러 발생:", error);
      return null;
    }

    // 연결 성공 시 로그 출력
    eventSource.onopen = () => {
      console.log("SSE 연결이 열렸습니다!");
    };

    // SSE 이벤트 수신
    eventSource.addEventListener("sse-alarm", (event) => {
      console.log("SSE 이벤트 수신:", event);
      try {
        const data = JSON.parse(event.data);
        console.log("수신된 데이터 파싱 성공:", data);
        setSseData(data);
      } catch (error) {
        console.error("SSE 데이터 파싱 오류:", error);
      }
    });

    // 오류 처리
    eventSource.onerror = (error) => {
      console.error("SSE 연결 에러 발생:", error);
      if (error.status) {
        console.error("HTTP 상태 코드:", error.status);
      }
    };

    return eventSource;
  };

  // SSE 초기화 및 정리
  useEffect(() => {
    console.log("SSEProvider 마운트 - SSE 연결 시도");
    const eventSource = initializeSSE();

    // 컴포넌트 언마운트 시 SSE 연결 해제
    return () => {
      if (eventSource) {
        eventSource.close();
        console.log("SSE 연결이 종료되었습니다.");
      }
    };
  }, []);

  return (
    <SSEContext.Provider value={{ sseData }}>{children}</SSEContext.Provider>
  );
};

// SSEContext를 사용하는 커스텀 훅
export const useSSE = () => {
  return useContext(SSEContext);
};

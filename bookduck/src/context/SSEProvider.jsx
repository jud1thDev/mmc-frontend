import React, { createContext, useContext, useEffect, useState } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";

const SSEContext = createContext();

export const SSEProvider = ({ children }) => {
  const [sseData, setSseData] = useState({
    isCommonAlarmChecked: null,
    isAnnouncementChecked: null,
    isItemUnlockedChecked: null,
  });

  useEffect(() => {
    console.log("sseData 상태 업데이트:", sseData);
  }, [sseData]);

  useEffect(() => {
    let eventSource;
    const tokenData = JSON.parse(localStorage.getItem("token"));
    const accessKey = tokenData?.accessToken;

    if (accessKey) {
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

      eventSource.onopen = () => {
        console.log("SSE 연결이 열렸습니다!");
      };

      eventSource.addEventListener("sse-alarm", (event) => {
        const data = JSON.parse(event.data);
        console.log("새로운 알림 수신:", data);
        setSseData({
          isCommonAlarmChecked: data.isCommonAlarmChecked,
          isAnnouncementChecked: data.isAnnouncementChecked,
          isItemUnlockedChecked: data.isItemUnlockedChecked,
        });
      });

      eventSource.onerror = (error) => {
        console.error("SSE 에러:", error);
      };
    }

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

export const useSSE = () => {
  return useContext(SSEContext);
};

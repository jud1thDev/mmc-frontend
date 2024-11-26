import React, { useState, useEffect, useRef } from "react";
import { get, patch } from "../../api/example";
import NotificationItemComponent from "./NotificationItemComponent";
import { useSSE } from "../../context/SSEProvider";
/*API-일반 알람 읽음 처리*/
export const patchAlarm = async (alarmId) => {
  try {
    await patch(`/alarms/common`, {
      alarmId: alarmId,
    });
    console.log("일반 알림 읽음 처리 완료");
  } catch (error) {
    console.error("일반 알람 읽음 처리 에러", error);
  }
};
const GeneralNotiComponent = () => {
  const [notifications, setNotifications] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);
  const DATA_LIMIT = 10;

  const { sseData } = useSSE();

  /* API-알람 리스트 받기*/
  const getAlarmList = async (page = 0) => {
    try {
      const response = await get(
        `/alarms/common?page=${page}&size=${DATA_LIMIT}`
      );
      console.log("response", response);
      const data = response.pageContent.map((alarm) => ({
        resourceId: alarm.resourceId,
        alarmId: alarm.alarmId,
        isRead: alarm.isRead,
        alarmType: alarm.alarmType,
        createdTime: alarm.createdTime,
        boldText: alarm.boldText,
      }));
      setNotifications((n) => [...n, ...data]);
      setTotalPages(response.totalPages || 1);
    } catch (error) {
      console.error("알람 읽기 오류", error);
    }
  };

  // 초기화 로직
  useEffect(() => {
    const initialize = async () => {
      setNotifications([]); // 기존 데이터 초기화
      setCurrentPage(0); // 첫 페이지로 초기화
      setIsLoading(true);
      await getAlarmList(0);
      setIsLoading(false);
    };

    initialize();
  }, []);

  // SSE 데이터 처리
  useEffect(() => {
    if (!sseData.isCommonAlarmChecked) {
      console.log("새로운 일반 알람 확인");
      const newAlarm = {
        alarmId: sseData.alarmId,
        isRead: sseData.isRead,
        alarmType: sseData.alarmType,
        createdTime: sseData.createdTime,
        boldText: sseData.boldText,
      };
      setNotifications((prev) => [newAlarm, ...prev]);
    }
  }, [sseData]);

  // 무한 스크롤 감지
  useEffect(() => {
    const handleObserver = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && currentPage < totalPages && !isLoading) {
        console.log("다음 페이지 로드");
        setCurrentPage((p) => p + 1);
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [currentPage, totalPages, isLoading]);

  // 현재 페이지 데이터 로드
  useEffect(() => {
    if (currentPage > 0 && !isLoading) {
      console.log(`페이지 ${currentPage} 데이터 로드`);
      setIsLoading(true);
      getAlarmList(currentPage).finally(() => setIsLoading(false));
    }
  }, [currentPage]);

  return (
    <>
      {notifications.map((notification, index) => (
        <div key={index}>
          <NotificationItemComponent
            alarmId={notification.alarmId}
            alarmType={notification.alarmType}
            boldText={notification.boldText}
            isRead={notification.isRead}
            createdTime={notification.createdTime}
            resourceId={notification.resourceId}
          />
        </div>
      ))}
      <div ref={loaderRef} />
    </>
  );
};

export default GeneralNotiComponent;

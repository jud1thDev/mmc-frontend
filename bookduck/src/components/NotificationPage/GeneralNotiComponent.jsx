import React, { useState, useEffect, useRef } from "react";
import { get } from "../../api/example";
import NotificationItemComponent from "./NotificationItemComponent";
import { useSSE } from "../../context/SSEProvider";

const GeneralNotiComponent = () => {
  //상태 관리
  const [notifications, setNotifications] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const loaderRef = useRef(null);
  const DATA_LIMIT = 10;

  const { sseData } = useSSE();
  useEffect(() => {
    console.log("새로운 알림", sseData);
  }, [sseData]);

  //API 연결
  //API-알람 목록 받아오기
  const getAlarmList = async (page = 0) => {
    try {
      const response = await get(
        `/alarms/common?page=${page}&size=${DATA_LIMIT}`
      );
      console.log("response", response);
      const data = response.pageContent.map((alarm) => ({
        alarmId: alarm.alarmId,
        isRead: alarm.isRead,
        alarmType: alarm.alarmType,
        createdTime: alarm.createdTime,
        boldText: alarm.boldText,
      }));
      setNotifications((n) => [...n, ...data]);
      setTotalPages(response.totalPages || 0);
    } catch (error) {
      console.error("알람 읽기 오류", error);
    }
  };

  // useEffect 훅
  // 검색어 변경 시 데이터 초기화 및 첫 페이지 호출
  useEffect(() => {
    setNotifications([]); // 기존 데이터 초기화
    setCurrentPage(0); // 첫 페이지로 초기화
    getAlarmList(0);
  }, []);

  // SSE 데이터 감시
  useEffect(() => {
    if (!sseData.isCommonAlarmChecked) {
      console.log("새로운 일반 알람 확인. getAlarmList 호출");
      getAlarmList(0); // 새로운 데이터 가져오기
    }
  }, [sseData]);

  // 무한 스크롤 감지
  useEffect(() => {
    const handleObserver = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && currentPage < totalPages) {
        console.log("다음 페이지 로드");
        setCurrentPage((p) => p + 1);
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null, // viewport 사용
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [currentPage, totalPages]);

  // 현재 페이지 데이터 로드
  useEffect(() => {
    if (currentPage > 0) {
      console.log(`페이지 ${currentPage} 데이터 로드`);
      getBooks(currentPage);
    }
  }, [currentPage]);

  return notifications.map((notification, index) => (
    <div key={index}>
      <NotificationItemComponent
        alarmType={notification.alarmType}
        boldText={notification.boldText}
        isRead={notification.isRead}
        createdTime={notification.createdTime}
      />
    </div>
  ));
};

export default GeneralNotiComponent;

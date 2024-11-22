import React, { useState, useEffect } from "react";
import { patch } from "../../api/example";
import NotificationItemComponent from "./NotificationItemComponent";
const GeneralNotiComponent = () => {
  //상태 관리
  const [notifications, setNotifications] = useState([]);

  //API 연결
  //API-알람 목록 받아오기
  const patchAlarmList = async () => {
    try {
      const response = await patch(`/alarms/common`);
      console.log(response);
      setNotifications(response.alarmList);
    } catch (error) {
      console.error("알람 읽기 오류", error);
    }
  };

  //useEffect 훅
  useEffect(() => {
    patchAlarmList();
    console.log(notifications);
  }, []);

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

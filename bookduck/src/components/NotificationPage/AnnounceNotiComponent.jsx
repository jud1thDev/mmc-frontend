import React, { useState, useEffect } from "react";
import NotificationItemComponent from "./NotificationItemComponent";
import { patch } from "../../api/example";
const AnnounceNotiComponent = () => {
  //상태 관리
  const [notifications, setNotifications] = useState([]);

  return notifications.map((notification) => (
    <div key={notification.id}>
      <NotificationItemComponent
        type={notification.type}
        text={notification.text}
        read={notification.read}
      />
    </div>
  ));
};

export default AnnounceNotiComponent;

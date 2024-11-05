import React from "react";
import NotificationItemComponent from "./NotificationItemComponent";
const AnnounceNotiComponent = ({ notifications }) => {
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

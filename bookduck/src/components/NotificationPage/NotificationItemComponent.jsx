/* eslint-disable react/prop-types */
import alarmduck from "../../assets/common/duck-alarm.svg";
import alarmheart from "../../assets/common/heart-alarm.svg";
import alarmhand from "../../assets/common/waving-hand-alarm.svg";
import alarmbadge from "../../assets/common/badge-alarm.svg";
import alarmCircle from "../../assets/common/circle-alarm.svg";

const notificationTemplates = {
  FRIEND_REQUEST: {
    icon: alarmhand,
    message: (text) => (
      <span>
        <strong style={{ fontWeight: "bold" }}>{text}님</strong>으로부터 친구
        요청이 도착했어요.
      </span>
    ),
  },
  FRIEND_APPROVED: {
    icon: alarmhand,
    message: (text) => (
      <span>
        <strong style={{ fontWeight: "bold" }}>{text}님</strong>이 친구요청을
        수락했어요.
      </span>
    ),
  },
  LEVEL_UP: {
    icon: alarmduck,
    message: (text) => (
      <span>
        야호! 오리가 <strong style={{ fontWeight: "bold" }}>Lv.{text}</strong>로
        성장했어요.
      </span>
    ),
  },
  ONELINELIKE_ADDED: {
    icon: alarmheart,
    message: (text) => (
      <span>
        <strong style={{ fontWeight: "bold" }}>{text}님</strong>이 독서기록에
        좋아요를 눌렀어요.
      </span>
    ),
  },
  BADGE_UNLOCKED: {
    icon: alarmbadge,
    message: (text) => (
      <span>
        축하합니다! 🎉
        <strong style={{ fontWeight: "bold" }}>{text}업적</strong>을 달성하여 새
        배지를 획득했어요.
      </span>
    ),
  },
};

const formatNotiTime = (rawTime) => {
  const now = new Date();
  const past = new Date(rawTime);

  const diff = Math.floor((now - past) / 1000); // 총 시간 차이를 초 단위로 계산
  const weeks = Math.floor(diff / (3600 * 24 * 7)); // 주 단위로 계산
  const days = Math.floor(diff / (3600 * 24)); // 일 단위로 계산
  const hours = Math.floor((diff % (3600 * 24)) / 3600); // 시간 단위로 계산
  const minutes = Math.floor((diff % 3600) / 60); // 분 단위로 계산

  if (weeks > 0) {
    return `${weeks}주`;
  } else if (days > 0) {
    return `${days}일`;
  } else if (hours > 0) {
    return `${hours}시간`;
  } else if (minutes > 0) {
    return `${minutes}분`;
  } else {
    return `방금 전`;
  }
};

const NotificationItemComponent = ({
  alarmType,
  boldText,
  isRead,
  createdTime,
}) => {
  const notificationData = notificationTemplates[alarmType];
  console.log(notificationData);
  return (
    <div className="flex gap-4 items-center w-[24.5625rem] px-4 py-3">
      <div className="min-w-12 min-h-12 w-12 h-12  rounded-full bg-gray-50 flex items-center justify-center relative ">
        <img src={notificationData?.icon} alt={alarmType} />
        {!isRead && (
          <img
            src={alarmCircle}
            className="absolute right-[0.03rem] top-[0.38rem]"
          />
        )}
      </div>
      <div>
        <span className="text-black text-b2">
          {notificationData?.message(boldText)}
        </span>
        <span className="ml-1 text-gray-500 text-c1">
          {formatNotiTime(createdTime)}
        </span>
      </div>
    </div>
  );
};

export default NotificationItemComponent;

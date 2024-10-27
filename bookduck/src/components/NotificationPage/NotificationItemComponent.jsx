/* eslint-disable react/prop-types */
import alarmduck from "../../assets/common/duck-alarm.svg";
import alarmheart from "../../assets/common/heart-alarm.svg";
import alarmhand from "../../assets/common/waving-hand-alarm.svg";
import alarmbadge from "../../assets/common/badge-alarm.svg";
import alarmCircle from "../../assets/common/circle-alarm.svg";
const notificationTemplates = {
  친구요청: {
    icon: alarmhand,
    message: (text) => (
      <span>
        <strong style={{ fontWeight: "bold" }}>{text}님</strong>으로부터 친구
        요청이 도착했어요.
      </span>
    ),
  },
  친구수락: {
    icon: alarmhand,
    message: (text) => (
      <span>
        <strong style={{ fontWeight: "bold" }}>{text}님</strong>이 친구요청을
        수락했어요.
      </span>
    ),
  },
  레벨업: {
    icon: alarmduck,
    message: (text) => (
      <span>
        야호! 오리가 <strong style={{ fontWeight: "bold" }}>Lv.{text}</strong>로
        성장했어요.
      </span>
    ),
  },
  기록: {
    icon: alarmheart,
    message: (text) => (
      <span>
        <strong style={{ fontWeight: "bold" }}>{text}님</strong>이 독서기록에
        좋아요를 눌렀어요.
      </span>
    ),
  },
  업적: {
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

const NotificationItemComponent = ({ type, text, read = false }) => {
  const notificationData = notificationTemplates[type];

  return (
    <div className="flex gap-[1rem] items-center w-[24.5625rem] px-[1rem] py-[0.75rem]">
      <div className="w-[3rem] h-[3rem] rounded-full bg-gray-50 flex items-center justify-center relative ">
        <img
          src={notificationData.icon}
          alt={type}
          className="w-[1.75rem] h-[1.75rem]"
        />
        {!read && (
          <img
            src={alarmCircle}
            className="absolute right-[0.03rem] top-[0.38rem]"
          />
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-black text-b2">
          {notificationData.message(text)}
        </span>
      </div>
    </div>
  );
};

export default NotificationItemComponent;

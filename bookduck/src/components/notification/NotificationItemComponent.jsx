/* eslint-disable react/prop-types */
import alarmduck from "../../assets/common/duck-alarm.svg";
import alarmheart from "../../assets/common/heart-alarm.svg";

const notificationTemplates = {
  "친구 요청": {
    icon: "",
    message: (text) => (
      <span>
        <strong style={{ fontWeight: "bold" }}>{text}님</strong>으로부터 친구
        요청이 도착했어요!
      </span>
    ),
  },
  레벨업: {
    icon: alarmduck,
    message: (text) => (
      <span>
        야호! {text}가 <strong style={{ fontWeight: "bold" }}>Lv.2</strong>로
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
    icon: "",
    message: () => (
      <span>
        🎉 축하합니다! <strong style={{ fontWeight: "bold" }}>업적</strong>을
        달성하여 새 배지를 획득했어요.
      </span>
    ),
  },
};

const NotificationItemComponent = ({ type, text }) => {
  const notificationData = notificationTemplates[type];

  return (
    <div className="flex items-center px-[16px] py-[8px]">
      <div className="w-[46px] h-[46px] rounded-full bg-[#FFFAE6] flex items-center justify-center">
        {notificationData.icon && (
          <img src={notificationData.icon} alt={type} className="w-8 h-8" />
        )}
      </div>

      <div className="flex flex-col ml-[16px]">
        <span className="text-gray-500 text-c1">{type}</span>
        <span className="text-black text-b1">
          {notificationData.message(text)}
        </span>
      </div>
    </div>
  );
};

export default NotificationItemComponent;

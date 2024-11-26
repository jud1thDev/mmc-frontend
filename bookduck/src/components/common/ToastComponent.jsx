/*사용법
useEffect안에서 showToast함수 불러서 사용
예시)
 showToast({
        icon: noti,
        title: "아이템 알림",
        message: "새로운 아이템이 열렸어요! ✨",
        buttonLabel: "보러가기",
        handleClick: () => alert("아이템 보러가기 클릭"),
      });
*/

import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ToastTemplate = ({
  icon,
  title,
  message,
  buttonLabel,
  handleClick,
}) => {
  return (
    <div className="flex flex-row justify-between w-[22.5625rem] h-[4.375rem] bg-[#FF9F1C] text-white py-4 px-5 rounded-[1rem]">
      <div className=" flex flex-row">
        <div className="flex items-center mr-2">
          <img src={icon} />
        </div>
        <div className="flex flex-col">
          <p className="text-c1">{title}</p>
          <p className="text-btn2 font-semibold">{message}</p>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="text-btn3 bg-white bg-opacity-20 py-1 px-3 rounded-[0.375rem]"
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export const showToast = ({
  icon,
  title,
  message,
  buttonLabel,
  handleClick,
  duration = 3000,
}) => {
  toast(
    <ToastTemplate
      icon={icon}
      title={title}
      message={message}
      buttonLabel={buttonLabel}
      handleClick={handleClick}
    />,
    {
      autoClose: duration,
      draggable: true,
      hideProgressBar: true,
    }
  );
};

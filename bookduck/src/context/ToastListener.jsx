import React, { useEffect } from "react";
import { showToast } from "../components/common/ToastComponent";
import { ToastContainer } from "react-toastify";
import { useSSE } from "./SSEProvider";
import noti from "../assets/notificationPage/item-noti.svg";

const ToastListener = () => {
  const { sseData } = useSSE();
  useEffect(() => {
    console.log("sseData:", sseData);
    if (sseData.isItemUnlockedChecked === false) {
      showToast({
        icon: noti,
        title: "아이템 알림",
        message: "새로운 아이템이 열렸어요! ✨",
        buttonLabel: "보러가기",
        handleClick: () => alert("아이템 보러가기 클릭"),
      });
    }
  }, [sseData]);

  return (
    <div className="relative w-full">
      <ToastContainer
        position={"top-center"}
        autoClose={3000}
        closeButton={false}
        hideProgressBar
        toastClassName={() => "w-full absolute"}
        bodyClassName={() => "m-auto w-fit"}
        className={"w-[24.5625rem] p-0"}
      />
    </div>
  );
};

export default ToastListener;

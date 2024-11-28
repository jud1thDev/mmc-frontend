import React, { useEffect, useState } from "react";
import { showToast } from "../components/common/ToastComponent";
import { ToastContainer } from "react-toastify";
import { useSSE } from "./SSEProvider";
import noti from "../assets/notificationPage/item-noti.svg";
import CharacterAlarmModal from "../components/CharacterPage/CharacterAlarmModal";

const ToastListener = () => {
  const [isAlarmModalOpen, setIsAlarmModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState(null); // 모달의 타입 및 내용 저장
  const { sseData } = useSSE();

  const toggleAlarmModal = () => {
    setIsAlarmModalOpen(false);
    setModalProps(null); // 모달 닫을 때 props 초기화
  };

  useEffect(() => {
    if (sseData.isItemUnlockedChecked === false) {
      showToast({
        icon: noti,
        title: "아이템 알림",
        message: "새로운 아이템이 열렸어요! ✨",
        buttonLabel: "보러가기",
        handleClick: () => alert("아이템 보러가기 클릭"),
      });
    } else if (sseData.isLevelUpChecked === false) {
      setModalProps({
        type: "LEVEL",
        text: sseData.newLevel,
      });
      setIsAlarmModalOpen(true);
    } else if (sseData.isBadgeUnlockedChecked === false) {
      setModalProps({
        type: "BADGE",
        badgeType: sseData.newBadgeInfo.badgeType,
        badgeName: sseData.newBadgeInfo.badgeName,
        text: sseData.newBadgeInfo.description,
      });
      setIsAlarmModalOpen(true);
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
      {isAlarmModalOpen && modalProps && (
        <CharacterAlarmModal
          type={modalProps.type}
          badgeType={modalProps.badgeType}
          badgeName={modalProps.badgeName}
          text={modalProps.text}
          onClick={toggleAlarmModal}
        />
      )}
    </div>
  );
};

export default ToastListener;

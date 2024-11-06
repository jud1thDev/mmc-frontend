import React, { useState } from "react";
import duck from "../../assets/common/duck.svg";
import ButtonComponent from "./ButtonComponent";

const FriendListComponent = ({
  image,
  userName,
  text,
  handleDelete,
  handleCancel,
  handleDecline,
  handleAccept,
}) => {
  const handleImage = (e) => {
    e.target.src = duck;
  };
  return (
    <div className="flex justify-between items-center px-4 py-[0.5rem]">
      <div className="flex gap-3 items-center">
        <div className="w-[3.5rem] h-[3.5rem]">
          <img
            src={image || duck}
            alt="userPicture"
            className="w-[100%] h-[100%] object-cover rounded-full"
            onError={handleImage}
          />
        </div>
        <span>{userName}</span>
      </div>
      <div>
        {text ? (
          text === "삭제" || text === "취소" ? (
            <button
              onClick={text === "삭제" ? handleDelete : handleCancel}
              className={`text-btn3 ${
                text === "삭제" ? "text-[#FFBF68]" : "text-gray-400"
              } px-3 py-1`}
            >
              {text}
            </button>
          ) : null
        ) : (
          <div className="flex gap-[0.62rem]">
            <ButtonComponent
              type="secondary"
              text="거절"
              color="gray"
              size="small"
              disabled={false}
              onClick={() => {
                handleDecline();
              }}
            />
            <ButtonComponent
              type="secondary"
              text="수락"
              color="orange"
              size="small"
              disabled={false}
              onClick={handleAccept}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendListComponent;

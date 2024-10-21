import React, { useState } from "react";
import duck from "../../assets/common/duck.svg";
import ButtonComponent from "../common/ButtonComponent";

const FriendListComponent = ({ image, userName, text }) => {
  const handleImage = (e) => {
    e.target.src = duck;
  };
  return (
    <div className="flex justify-between items-center px-[1rem] py-[0.5rem]">
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
          <button className="text-btn3 text-[#FFBF68] px-3 py-1">{text}</button>
        ) : (
          <div className="flex gap-[0.62rem]">
            <ButtonComponent
              type="secondary"
              text="거절"
              color="gray"
              size="small"
            />
            <ButtonComponent
              type="secondary"
              text="수락"
              color="orange"
              size="small"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendListComponent;

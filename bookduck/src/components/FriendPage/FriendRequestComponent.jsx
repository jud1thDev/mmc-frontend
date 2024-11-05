import React, { useState } from "react";
import FriendListComponent from "../common/FriendListComponent";
import up from "../../assets/common/up.svg";
import down from "../../assets/common/down.svg";
const FriendRequestComponent = ({ friendList }) => {
  const [isRequested, setIsRequested] = useState(true);
  const [isSent, setIsSent] = useState(true);
  const handleRequested = () => {
    setIsRequested((prev) => !prev);
  };
  const handleSent = () => {
    setIsSent((prev) => !prev);
  };
  return (
    <>
      <div>
        <div className="flex justify-between items-center px-4 py-2">
          <span className="text-btn3 font-semibold text-gray-800">요청된</span>
          <button onClick={handleRequested} className="w-[2.5rem] h-[2.5rem]">
            {isRequested ? (
              <img src={up} alt="upIcon" />
            ) : (
              <img src={down} alt="downIcon" />
            )}
          </button>
        </div>
        {isRequested && (
          <div>
            {friendList.map((friend) => {
              return (
                <FriendListComponent
                  key={friend.id}
                  userName={friend.userName}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center px-4 py-2">
          <span className="text-btn3 font-semibold text-gray-800">요청한</span>
          <button onClick={handleSent} className="w-[2.5rem] h-[2.5rem]">
            {isSent ? (
              <img src={up} alt="upIcon" />
            ) : (
              <img src={down} alt="downIcon" />
            )}
          </button>
        </div>
        {isSent && (
          <div>
            {friendList.map((friend) => {
              return (
                <FriendListComponent
                  key={friend.id}
                  userName={friend.userName}
                  text="취소"
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default FriendRequestComponent;

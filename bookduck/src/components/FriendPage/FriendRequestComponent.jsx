import React, { useState, useEffect } from "react";
import {
  getReceivedFriendList,
  postFriendRequest,
  putFriendRequest,
  getSentFriendList,
  deleteFriendRequest,
} from "../../api/friend";
import FriendListComponent from "../common/FriendListComponent";
import up from "../../assets/common/up.svg";
import down from "../../assets/common/down.svg";

const FriendRequestComponent = () => {
  //상태 관리
  const [receivedFriendList, setReceivedFriendList] = useState([]);
  const [receivedFriendCount, setReceivedFriendCount] = useState(0);
  const [sentFriendList, setSentFriendList] = useState([]);
  const [sentFriendCount, setSentFriendCount] = useState(0);

  const [showReceived, setShowReceived] = useState(true);
  const [showSent, setShowSent] = useState(true);

  //API-받은 친구 목록 조회
  const readReceivedFriendList = async () => {
    try {
      const response = await getReceivedFriendList();
      setReceivedFriendList(response.data.requestList);
      setReceivedFriendCount(response.data.requestCount);
      // console.log(response.data.requestList);
      // console.log(response.data.requestCount);
    } catch (error) {
      console.error("받은 친구 목록 조회 에러", error);
    }
  };

  //API-친구 요청 거절
  const replaceFriendRequest = async (friendRequestId) => {
    try {
      await putFriendRequest(friendRequestId);
      readReceivedFriendList();
    } catch (error) {
      console.error("친구 요청 거절 에러", error);
    }
  };

  //API-친구 요청 수락
  const createFriend = async (friendRequestId) => {
    try {
      await postFriendRequest(friendRequestId);
      readReceivedFriendList();
    } catch (error) {
      console.error("친구 요청 수락 에러", error);
    }
  };

  //API-보낸 친구 목록 조회
  const readSentFriendList = async () => {
    try {
      const response = await getSentFriendList();
      // console.log(response.data);
      setSentFriendList(response.data.requestList);
      setSentFriendCount(response.data.requestCount);
      // console.log(response.data.requestList);
      // console.log(response.data.requestCount);
    } catch (error) {
      console.error("보낸 친구 목록 조회 에러", error);
    }
  };

  //API-친구 요청취소
  const delFriendRequest = async (friendRequestId) => {
    // console.log(friendRequestId);
    try {
      await deleteFriendRequest(friendRequestId);
      // console.log("친구 요청취소 성공");
      readSentFriendList();
    } catch (error) {
      console.error("친구 요청취소 에러", error);
    }
  };
  //useEffect hook
  useEffect(() => {
    readReceivedFriendList();
    readSentFriendList();
  }, []);

  //이벤트 핸들러
  const handleReceived = () => {
    setShowReceived((prev) => !prev);
  };

  const handleSent = () => {
    setShowSent((prev) => !prev);
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center px-4 py-2">
          <span className="text-btn3 font-semibold text-gray-800">요청된</span>
          <button onClick={handleReceived} className="w-[2.5rem] h-[2.5rem]">
            {showReceived ? (
              <img src={up} alt="upIcon" />
            ) : (
              <img src={down} alt="downIcon" />
            )}
          </button>
        </div>
        {showReceived && receivedFriendCount > 0 && (
          <div>
            {receivedFriendList.map((friend, index) => (
              <FriendListComponent
                key={index}
                userName={friend.userNickname}
                handleDecline={() => replaceFriendRequest(friend.requestId)}
                handleAccept={() => createFriend(friend.requestId)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center px-4 py-2">
          <span className="text-btn3 font-semibold text-gray-800">요청한</span>
          <button onClick={handleSent} className="w-[2.5rem] h-[2.5rem]">
            {showSent ? (
              <img src={up} alt="upIcon" />
            ) : (
              <img src={down} alt="downIcon" />
            )}
          </button>
        </div>
        {showSent && sentFriendCount > 0 && (
          <div>
            {sentFriendList.map((friend, index) => (
              <FriendListComponent
                key={index}
                userName={friend.userNickname}
                text="취소"
                handleCancel={() => delFriendRequest(friend.requestId)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FriendRequestComponent;

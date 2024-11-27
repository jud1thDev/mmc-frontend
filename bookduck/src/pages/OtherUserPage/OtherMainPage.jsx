import React, { useState, useEffect } from "react";
import Header from "../../components/OtherUserPage/Header";
import StatusBar from "../../components/common/StatusBar";
import { get, post } from "../../api/example";
import { useNavigate } from "react-router-dom";
import ReadingSpaceComponent from "../../components/MainPage/ReadingSpaceComponent";
import BookCountDisplay from "../../components/MainPage/BookCountDisplay";
import right from "../../assets/common/right-yellow.svg";
import mainDuck from "../../assets/common/main-duck.svg";
import { useParams } from "react-router-dom";

const OtherMainPage = () => {
  const navigate = useNavigate();
  let { id: userId } = useParams();
  const [userInfo, setUserInfo] = useState([]);
  //API 연결-정보받기
  const getUserInfo = async (userId) => {
    try {
      const data = await get(`/users/${userId}`);
      console.log(data);
      setUserInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  //API-친구추가
  const postFriendRequest = async (userId) => {
    try {
      await post(`/friendrequests`, {
        receiverId: userId,
      });
      console.log("추가완료");
    } catch (error) {
      console.error(error);
    }
  };

  //API-친구 요청취소
  const delFriendRequest = async (friendRequestId) => {
    // console.log(friendRequestId);
    try {
      await del(`/friendrequests/${friendRequestId}`);
      // console.log("친구 요청취소 성공");
      getSentFriendList();
    } catch (error) {
      console.error("친구 요청취소 에러", error);
    }
  };

  useEffect(() => {
    console.log("userId", userId);
    if (userId) {
      getUserInfo(userId);
    }
  }, [userId]);
  return (
    <div className="bg-gray-50 overflow-hidden h-screen">
      <StatusBar />
      <Header
        isFriend={userInfo.isFriend}
        handleAddClick={() => postFriendRequest(userId)}
      />
      <div className="pl-5 mt-[1.75rem]">
        <div className="text-t2 font-semibold text-black">
          {userInfo?.nickname}님의
        </div>
        <div className="text-t2 font-semibold text-black mt-[0.38rem]">
          홈에 오신 걸 환영해요!
        </div>
        <div className="flex flex-col w-[10.625rem] h-[6rem] bg-white rounded-[0.75rem] mt-[2.69rem] pl-4 pr-5 pt-3 gap-2">
          <span className="text-b2 text-gray-800 font-semibold">
            지금까지의 기록
          </span>
          <div className="flex flex-row">
            <BookCountDisplay bookCount={userInfo?.bookCount || 0} />
            <div className="ml-[0.62rem] self-end text-b2 text-gray-500 font-semibold">
              개
            </div>
          </div>
        </div>
        <button
          className="w-[10.5625rem]"
          onClick={() => navigate("/statistics")}
        >
          <div className="flex justify-center items-center gap-[0.38rem] w-[10.625rem] h-[2.625rem] bg-white rounded-[0.625rem] mt-[0.81rem]">
            <span className="text-b2 text-gray-800 font-semibold">
              독서 리포트 보러가기
            </span>
            <img src={right} />
          </div>
        </button>
        <img
          src={mainDuck}
          className="absolute top-[11.42rem] right-[5rem] w-[10rem]"
        />
        <ReadingSpaceComponent isMine={false} otherUserId={userId} />
      </div>
    </div>
  );
};

export default OtherMainPage;

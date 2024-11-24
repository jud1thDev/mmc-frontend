import React, { useState, useEffect } from "react";
import Header from "../../components/OtherUserPage/Header";
import StatusBar from "../../components/common/StatusBar";
import { get, post } from "../../api/example";
import ReadingSpaceComponent from "../../components/MainPage/ReadingSpaceComponent";
import { useParams } from "react-router-dom";

const OtherMainPage = () => {
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
    <div>
      <StatusBar />
      <Header
        name={userInfo.nickname}
        isFriend={userInfo.isFriend}
        handleAddClick={() => postFriendRequest(userId)}
      />
      <ReadingSpaceComponent isMine={false} otherUserId={userId} />
    </div>
  );
};

export default OtherMainPage;

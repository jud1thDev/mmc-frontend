import React, { useState, useEffect } from "react";
import FriendListComponent from "../common/FriendListComponent";
import { getFriendList, deleteFriend } from "../../api/friend";
const CurrentFriendComponent = () => {
  const [friendList, setFriendList] = useState([]);
  const [friendCount, setFriendCount] = useState(0);
  //API연결
  //API-친구 목록 조회
  const readfriendList = async () => {
    try {
      const response = await getFriendList();
      setFriendList(response.data.friendList);
      setFriendCount(response.data.friendCount);
      console.log(response.data.friendList);
      console.log(response.data.friendCount);
    } catch (error) {
      console.error("친구 정보 읽기 오류", error);
    }
  };
  //API-친구 삭제
  const delFriend = async (friendId) => {
    try {
      await deleteFriend(friendId);
      await readfriendList();
    } catch (error) {
      console.error(error);
    }
  };

  //useEffect hook
  useEffect(() => {
    readfriendList();
  }, []);

  //이벤트 핸들러
  const handleDelete = async (friendId) => {
    try {
      await delFriend(friendId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {friendList.map((friend, index) => (
        <FriendListComponent
          key={index}
          userName={friend.nickname}
          text="삭제"
          handleDelete={() => delFriend(friend.friendId)}
        />
      ))}
    </div>
  );
};

export default CurrentFriendComponent;

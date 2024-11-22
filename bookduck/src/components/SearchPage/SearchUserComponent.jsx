import React, { useState, useEffect } from "react";
import FriendListComponent from "../../components/common/FriendListComponent";
import { get } from "../../api/example";
const SearchUserComponent = ({ search }) => {
  //상태
  const [users, setUsers] = useState([]);

  //API연결
  //API-일반 책 정보받기
  const getUsers = async (keyword, page, size) => {
    try {
      const response = await get(
        `/users/search?keyword=${keyword}&page=${page}&size=${size}`
      );
      console.log("response", response);
      const data = response.userList.map((user) => ({
        userId: user.userId,
        nickname: user.nickname,
      }));
      setUsers(data);
      console.log("users:", users);
    } catch (error) {
      console.error("유저 읽어오기 오류", error);
    }
  };

  //useEffect 훅
  useEffect(() => {
    if (search) {
      getUsers(search, 0, 10);
    }
  }, [search]);

  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <FriendListComponent
            key={user.userId}
            userName={user.nickname}
            text="친구"
          />
        ))
      ) : (
        <div className="flex flex-col items-center mt-[8.06rem]">
          <span className="text-st text-gray-800 font-semibold">
            '{search}'
          </span>
          <span className="text-b1 text-gray-800">
            일치하는 검색 결과가 없어요.
          </span>
        </div>
      )}
    </div>
  );
};

export default SearchUserComponent;

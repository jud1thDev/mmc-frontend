import React, { useState, useEffect, useRef } from "react";
import FriendListComponent from "../../components/common/FriendListComponent";
import { useNavigate } from "react-router-dom";
import { get } from "../../api/example";
const SearchUserComponent = ({ search }) => {
  //상태
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const loaderRef = useRef(null);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const DATA_LIMIT = 10;
  //API연결
  //API-일반 책 정보받기
  const getUsers = async (keyword, page) => {
    try {
      const response = await get(
        `/users/search?keyword=${keyword}&page=${page}&size=${DATA_LIMIT}`
      );
      console.log("response", response);
      const data = response.pageContent.map((user) => ({
        userId: user.userId,
        nickname: user.nickname,
        isFriend: user.isFriend,
      }));
      setUsers(data);
      console.log("users:", users);
    } catch (error) {
      console.error("유저 읽어오기 오류", error);
    }
  };

  useEffect(() => {
    getUsers("", 0);
  }, []);
  //useEffect 훅
  useEffect(() => {
    if (search) {
      setUsers([]);
      setCurrentPage(0);
      getUsers(search, 0);
    }
  }, [search]);

  // 무한 스크롤 감지
  useEffect(() => {
    const handleObserver = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && currentPage < totalPages) {
        console.log("다음 페이지 로드");
        setCurrentPage((p) => p + 1);
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null, // viewport 사용
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [currentPage, totalPages]);

  // 현재 페이지 데이터 로드
  useEffect(() => {
    if (currentPage > 0 && search) {
      console.log(`페이지 ${currentPage} 데이터 로드`);
      getBooks(search, currentPage);
    }
  }, [currentPage, search]);
  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <FriendListComponent
            key={user.userId}
            userName={user.nickname}
            text={user.isFriend ? "친구" : "none"}
            handleClick={() => navigate(`/user/${user.userId}`)}
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

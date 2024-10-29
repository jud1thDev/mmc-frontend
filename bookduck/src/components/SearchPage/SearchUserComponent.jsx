import React, { useState, useEffect } from "react";
import FriendListComponent from "../../components/common/FriendListComponent";
const SearchUserComponent = ({ search }) => {
  const allUsers = [
    { id: 1, userName: "찬희야", text: "그랬어" },
    { id: 2, userName: "민수", text: "안녕하세요" },
    { id: 3, userName: "영희", text: "반가워요" },
  ];
  const [results, setResults] = useState(allUsers);

  useEffect(() => {
    if (search) {
      const filteredResult = allUsers.filter((user) =>
        user.userName.includes(search)
      );
      setResults(filteredResult);
    } else {
      setResults(allUsers);
    }
  }, [search]);
  return (
    <div>
      {results.length > 0 ? (
        results.map((result) => (
          <FriendListComponent
            key={result.id}
            userName={result.userName}
            text={result.text}
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

import React, { useState, useEffect } from "react";
import BookListView from "../common/BookListView";
import Divider1 from "../../components/common/Divider1";
import ButtonComponent from "../common/ButtonComponent";
import { useNavigate } from "react-router-dom";
const SearchBookComponent = ({ search }) => {
  const navigate = useNavigate();
  const registeredBooks = [
    {
      id: "1",
      title: "고고고",
      author: "마바사",
    },
    {
      id: "2",
      title: "ㅎㅎㅎ",
      author: "마바사",
    },
    {
      id: "3",
      title: "범죄수학",
      author: "마바사",
    },
  ];

  const books = [
    {
      id: "1",
      title: "가나다라",
      author: "마바사",
    },
    {
      id: "2",
      title: "가나다라",
      author: "마바사",
    },
    {
      id: "3",
      title: "고고고",
      author: "마바사",
    },
  ];

  const [registered, setRegistered] = useState([]);
  const [nonRegistered, setNonRegistered] = useState([]);

  useEffect(() => {
    if (search) {
      const filteredRegistered = registeredBooks.filter((registered) =>
        registered.title.includes(search)
      );
      const filteredNonRegistered = books.filter((nonRegistered) =>
        nonRegistered.title.includes(search)
      );
      setRegistered(filteredRegistered);
      setNonRegistered(filteredNonRegistered);
    } else {
      setRegistered([]);
      setNonRegistered([]);
    }
  }, [search]);

  return (
    <>
      {registered.length > 0 || nonRegistered.length > 0 ? (
        <>
          <div>
            {registered.length > 0 &&
              registered.map((book) => (
                <BookListView
                  key={book.id}
                  bookTitle={book.title}
                  author={book.author}
                  register={true}
                />
              ))}
          </div>
          {registered.length > 0 && nonRegistered.length > 0 && <Divider1 />}
          <div>
            {nonRegistered.length > 0 &&
              nonRegistered.map((book) => (
                <BookListView
                  key={book.id}
                  bookTitle={book.title}
                  author={book.author}
                />
              ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-2 items-center mt-[8.06rem]">
            <span className="text-st text-gray-800 font-semibold">
              {search ? <span>'{search}'</span> : ""}
            </span>
            <span className="text-b1 text-gray-800">
              일치하는 검색 결과가 없어요.
            </span>
            <span className="text-b1 text-gray-500 mb-3">
              책을 직접 등록해보세요!
            </span>
            <ButtonComponent
              text="책 등록하기"
              type="secondary"
              color="orange"
              size="small"
              onClick={() => navigate("/search/register")}
            />
          </div>
        </>
      )}
    </>
  );
};

export default SearchBookComponent;

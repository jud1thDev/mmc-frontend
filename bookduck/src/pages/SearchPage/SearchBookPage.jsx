import { useState, useEffect } from "react";
import StatusBar from "../../components/common/StatusBar";
import SearchComponent from "../../components/common/SearchComponent";
import TabBarComponent from "../../components/common/TabBarComponent";
import BookListView from "../../components/common/BookListView";
import Divider1 from "../../components/common/Divider1";
import ButtonComponent from "../../components/common/ButtonComponent";
const SearchBookPage = () => {
  const [tab, setTab] = useState("책");
  const [search, setSearch] = useState("");
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
  const [registered, setRegistered] = useState(registeredBooks);
  const [nonRegistered, setNonRegistered] = useState(books);

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
    <div className="w-[24.5625rem]">
      <StatusBar />
      <SearchComponent search={search} setSearch={setSearch} />
      <div className="flex flex-col gap-2">
        <TabBarComponent
          tabs={["책", "기록", "사용자"]}
          activeTab={tab}
          onTabClick={setTab}
          size="small"
        />
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
          <div className="flex flex-col items-center mt-[8.06rem]">
            <span className="text-st text-gray-800 font-semibold">
              {search ? <span>'{search}'</span> : ""}
            </span>
            <span className="text-b1 text-gray-800">
              일치하는 검색 결과가 없어요.
            </span>
            <span className="text-b1 text-gray-500">
              책을 직접 등록해보세요!
            </span>
            <ButtonComponent
              text="책 등록하기"
              type="secondary"
              color="orange"
              size="small"
              onClick={() => alert("메시지")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBookPage;

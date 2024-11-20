import React, { useEffect, useState } from "react";
import { get } from "../../api/example";
import { useNavigate } from "react-router-dom";
import StatusBar from "../../components/common/StatusBar";
import SearchComponent from "../../components/common/SearchComponent";
import BookComponent from "../../components/SearchPage/BookComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import CarouselComponent from "../../components/SearchPage/CarouselComponent";
import SearchBookComponent from "../../components/SearchPage/SearchBookComponent";
import SearchArchiveComponent from "../../components/SearchPage/SearchArchiveComponent";
import SearchUserComponent from "../../components/SearchPage/SearchUserComponent";
import TabBarComponent from "../../components/common/TabBarComponent";

const SearchMainPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [tab, setTab] = useState("책");
  const [recentBooks, setRecentBooks] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);
  //API 연결
  //최근 책 받기
  const getRecentBooks = async () => {
    try {
      const response = await get(`/books/recent`);
      setRecentBooks(response.bookList);
    } catch (error) {
      console.error("최근 책 정보 읽기 오류", error);
    }
  };

  //많이 읽는 책 받기
  const getPopularBooks = async () => {
    try {
      const response = await get(`/bookinfo/most`);
      console.log("많이 읽는", response);
      setPopularBooks(response.bookList);
    } catch (error) {
      console.error("많이 읽는 책 읽기 오류", error);
    }
  };

  //useEffect 훅
  useEffect(() => {
    getRecentBooks();
    getPopularBooks();
  }, []);

  //이벤트 핸들러
  const handleSearch = () => {
    setSubmittedSearch(search);
  };

  return (
    <div>
      <StatusBar />
      <SearchComponent
        search={search}
        setSearch={setSearch}
        onEnter={handleSearch}
      />
      {!search ? (
        <>
          <div className="flex flex-col px-4 gap-3 mt-4">
            <div>최근 기록한 책</div>
            <div className="flex flex-row gap-3">
              {recentBooks.map((book, index) => {
                return (
                  <BookComponent
                    key={index}
                    img={book.imgPath}
                    title={book.title}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-between px-7 py-4 bg-gray-10 my-5">
            <div className="flex flex-col gap-1 justify-center">
              <span className="text-btn3 text-gray-400">
                원하는 책을 찾을 수 없나요?
              </span>
              <span className="text-btn3 text-gray-800">
                직접 책을 등록해보세요
              </span>
            </div>
            <ButtonComponent
              text="책 등록하기"
              type="secondary"
              color="orange"
              size="medium"
              onClick={() => navigate("/search/register")}
            />
          </div>
          <div className="flex flex-col px-4 gap-3">
            <div>요즘 많이 읽는 책 Top 10</div>
            <CarouselComponent popularBooks={popularBooks} />
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-2">
          <TabBarComponent
            tabs={["책", "기록", "사용자"]}
            activeTab={tab}
            onTabClick={setTab}
            size="small"
          />
          {tab === "책" && (
            <SearchBookComponent
              search={submittedSearch}
              setSearch={setSearch}
            />
          )}
          {tab === "기록" && (
            <SearchArchiveComponent
              search={submittedSearch}
              setSearch={setSearch}
            />
          )}
          {tab === "사용자" && (
            <SearchUserComponent
              search={submittedSearch}
              setSearch={setSearch}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchMainPage;

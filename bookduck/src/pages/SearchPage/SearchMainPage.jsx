import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StatusBar from "../../components/common/StatusBar";
import SearchComponent from "../../components/common/SearchComponent";
import BookComponent from "../../components/SearchPage/BookComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import CarouselComponent from "../../components/SearchPage/CarouselComponent";
import BottomNavbar from "../../components/common/BottomNavbar";
import SearchBookComponent from "../../components/SearchPage/SearchBookComponent";
import SearchArchiveComponent from "../../components/SearchPage/SearchArchiveComponent";
import SearchUserComponent from "../../components/SearchPage/SearchUserComponent";
import TabBarComponent from "../../components/common/TabBarComponent";
import duck from "../../assets/common/duck.svg";

const SearchMainPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("책");
  const recentBooks = [
    { id: "1", img: duck, title: "가나다라" },
    { id: "2", img: duck, title: "마바사" },
    { id: "3", img: duck, title: "큐큐" },
  ];

  return (
    <div>
      <StatusBar />
      <SearchComponent search={search} setSearch={setSearch} />
      {!search ? (
        <>
          <div className="flex flex-col px-4 gap-3 mt-4">
            <div>최근 기록한 책</div>
            <div className="flex flex-row gap-3">
              {recentBooks.map((book) => {
                return (
                  <BookComponent
                    key={book.id}
                    img={book.img}
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
            <CarouselComponent />
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
            <SearchBookComponent search={search} setSearch={setSearch} />
          )}
          {tab === "기록" && (
            <SearchArchiveComponent search={search} setSearch={setSearch} />
          )}
          {tab === "사용자" && (
            <SearchUserComponent search={search} setSearch={setSearch} />
          )}
        </div>
      )}

      <BottomNavbar />
    </div>
  );
};

export default SearchMainPage;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import StatusBar from "../../components/common/StatusBar";
import Header3 from "../../components/common/Header3";
import OneBookCard from "../../components/MainPage/OneBookCard";
import BottomSheetModal from "../../components/common/BottomSheetModal";
import SearchComponent from "../../components/common/SearchComponent";
import BookListView from "../../components/common/BookListView";

const SelectCustomPage = () => {
  const location = useLocation();
  const bookNumber = location.state?.bookNumber;

  const cards = [
    {
      id: 1,
      content: "한번 피면 광장을 보게 되는 책이다.",
      title: "가나다",
      author: "마바사",
    },
    { id: 2, content: "또 다른 책 제목", title: "가나다", author: "마바사" },
  ];

  const [search, setSearch] = useState("");
  const [bottomSheetShow, setBottomSheetShow] = useState(true);
  const [visible, setVisible] = useState(true);
  const [selected, setSelected] = useState("firstBook");

  return (
    <div>
      <StatusBar />
      <Header3 title="커스텀 카드" />
      <div className="mt-[2.63rem] px-5">
        <OneBookCard
          bookNumber={bookNumber}
          selected={selected}
          bottomSheetShow={bottomSheetShow}
          setBottomSheetShow={setBottomSheetShow}
          setSelected={setSelected}
          setVisible={setVisible}
        />
      </div>
      <BottomSheetModal
        color="white"
        height="32.4375rem"
        bottomSheetShow={bottomSheetShow}
        setBottomSheetShow={setBottomSheetShow}
        visible={visible}
        setVisible={setVisible}
      >
        <SearchComponent
          search={search}
          setSearch={setSearch}
          placeholder="서재에 담긴 책을 검색하세요"
        />
        <div className="px-4">
          {cards.map((card) => (
            <BookListView
              key={card.id}
              bookTitle={card.title}
              author={card.author}
              edit={false}
            />
          ))}
        </div>
      </BottomSheetModal>
    </div>
  );
};

export default SelectCustomPage;

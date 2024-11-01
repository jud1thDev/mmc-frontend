import React, { useState } from "react";
import StatusBar from "../../components/common/StatusBar";
import Header3 from "../../components/common/Header3";
import SearchComponent from "../../components/common/SearchComponent";
import ExtractCard from "../../components/MainPage/ExtractCard";
import ButtonComponent from "../../components/common/ButtonComponent";
const SelectExtractPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const handleSelectCard = (id) => {
    setSelectedCard(id);
  };
  const cards = [
    {
      id: 1,
      content: "한번 피면 광장을 보게 되는 책이다.",
      title: "가나다",
      author: "마바사",
    },
    { id: 2, content: "또 다른 책 제목", title: "가나다", author: "마바사" },
    { id: 3, content: "다른 책 제목", title: "가나다", author: "마바사" },
    { id: 4, content: "다른 책 제목", title: "가나다", author: "마바사" },
    { id: 5, content: "다른 책 제목", title: "가나다", author: "마바사" },
  ];
  return (
    <div className="w-[24.5625rem]">
      <StatusBar />
      <Header3 title="발췌 카드 선택" />
      <div className="mt-[0.62rem] mb-4">
        <SearchComponent
          placeholder="기록한 발췌 카드를 검색하세요"
          search={search}
          setSearch={setSearch}
        />
      </div>
      <div className="flex flex-col gap-4 px-5">
        {cards.map((card) => (
          <ExtractCard
            onClick={() => handleSelectCard(card.id)}
            key={card.id}
            selected={selectedCard === card.id ? true : false}
            title={card.title}
            content={card.content}
            page={card.page}
            author={card.author}
          />
        ))}
      </div>
      {selectedCard && (
        <div className="fixed bottom-0 w-[24.5625rem] h-[5.5rem] px-4 pt-[0.37rem] bg-white">
          <ButtonComponent
            text="완료"
            type="primary"
            disabled={!selectedCard}
          />
        </div>
      )}
    </div>
  );
};

export default SelectExtractPage;

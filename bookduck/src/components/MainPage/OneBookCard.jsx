import React, { useState, useRef, useEffect } from "react";
import { post } from "../../api/example";
import music from "../../assets/mainPage/music.svg";
import infoMusicBox from "../../assets/mainPage/info-musicbox.svg";
import infoMemoBox from "../../assets/mainPage/info-memobox.svg";

const OneBookCard = ({
  setBottomSheetShow,
  selected,
  setSelected,

  bookNumber = 1,
  firstImg,
  secondImg,
  firstId,
  secondId,

  readOnly,
  setVisible,
  setEnabled = () => {},
  setCardData = () => {},
}) => {
  //상태 관리
  const [cardType, setCardType] = useState("BOOK_WITH_SONG");
  const [singer, setSinger] = useState("");
  const [song, setSong] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [memo, setMemo] = useState("");

  //useEffect hook
  useEffect(() => {
    let enabled = false;
    if (bookNumber === 1) {
      if (cardType === "BOOK_WITH_SONG") {
        enabled = Boolean(firstImg && singer && song);
      } else {
        enabled = Boolean(firstImg && memo);
      }
    }
    if (bookNumber === 2) {
      if (cardType === "BOOK_WITH_SONG") {
        enabled = Boolean(firstImg && secondImg && singer && song);
      } else {
        enabled = Boolean(firstImg && secondImg && memo);
      }
    }
    console.log(enabled);
    setEnabled(enabled);
    setCardData({
      cardType: cardType,
      resourceId1: firstId,
      resourceId2: secondId,
      text1: cardType === "BOOK_WITH_SONG" ? singer : memo,
      text2: cardType === "BOOK_WITH_SONG" ? song : null,
      text3: cardType === "BOOK_WITH_SONG" ? bookTitle : null,
    });
  }, [firstImg, secondImg, singer, song, memo, cardType, bookNumber]);

  //이벤트 핸들러
  const handleToggle = () => {
    setCardType((prev) =>
      prev === "BOOK_WITH_SONG" ? "BOOK_WITH_MEMO" : "BOOK_WITH_SONG"
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "가수명") setSinger(value);
    if (name === "책제목") setBookTitle(value);
    if (name === "노래제목") setSong(value);
    if (name === "메모") setMemo(value);
  };

  const handleFirstBookClick = () => {
    if (!readOnly) {
      setSelected("firstBook");
      setBottomSheetShow(true);
    }
  };

  const handleSecondBookClick = () => {
    if (!readOnly) {
      setSelected("secondBook");
      setBottomSheetShow(true);
    }
  };

  const handleMusicClick = () => {
    if (!readOnly) {
      setVisible(false);
      setTimeout(() => {
        setBottomSheetShow(false);
      }, 300);
      setSelected("music");
    }
  };

  return (
    <div className="w-[24.5625rem] relative">
      <div className="flex gap-2  w-full h-[6.9375rem]">
        {/* 첫 번째 북박스 */}
        <div
          onClick={handleFirstBookClick}
          style={
            selected === "firstBook"
              ? {
                  background:
                    "linear-gradient(0deg, rgba(107, 127, 240, 0.20) 0%, rgba(107, 127, 240, 0.20) 100%), var(--Neutral-300, #DDD)",
                }
              : {}
          }
          className={`${
            selected === "firstBook" ? "border-[1px] border-[#6B7FF0]" : ""
          } flex items-center justify-center w-[5.125rem] h-full bg-gray-custom rounded-[0.375rem] shadow-custom`}
        >
          <img src={firstImg} alt="Book Card" />
        </div>

        {/* 두 번째 북박스 */}
        {bookNumber === 2 && (
          <div
            onClick={handleSecondBookClick}
            style={
              selected === "secondBook"
                ? {
                    background:
                      "linear-gradient(0deg, rgba(107, 127, 240, 0.20) 0%, rgba(107, 127, 240, 0.20) 100%), var(--Neutral-300, #DDD)",
                  }
                : {}
            }
            className={`${
              selected === "secondBook" ? "border-[1px] border-[#6B7FF0]" : ""
            } flex items-center justify-center w-[5.125rem] h-full bg-gray-custom rounded-[0.375rem] shadow-custom`}
          >
            <img src={secondImg} alt="Book Card" />
          </div>
        )}

        {/* 음악 박스 */}
        <div
          onClick={handleMusicClick}
          className={`${
            selected === "music" ? "border-[1px] border-[#6B7FF0]" : ""
          } ${bookNumber === 1 ? "w-[16.4375rem]" : "w-[10.8125rem]"}
            py-3 px-4 flex flex-col justify-between bg-gray-10 shadow-custom rounded-[0.75rem]`}
        >
          {cardType === "BOOK_WITH_SONG" ? (
            <>
              <div className="relative flex flex-row justify-between ">
                <p>
                  <span className="text-c1 text-gray-500 mr-1">by</span>
                  <input
                    type="text"
                    value={singer}
                    name="가수명"
                    placeholder=""
                    className="text-c1 text-gray-500 font-semibold bg-gray-10 focus w-[3.25rem]"
                    onChange={handleChange}
                  />
                </p>
                {!singer && (
                  <div className="absolute top-[0.8rem] left-[1.1rem] transform -translate-y-1/2 pointer-events-none flex items-center text-c1">
                    <span className="text-red mr-[0.2rem] font-semibold">
                      *
                    </span>
                    <span className="text-gray-500 font-semibold">가수명</span>
                  </div>
                )}
                <img src={music} alt="Music Icon" />
              </div>
              <div className="relative flex flex-col items-end">
                <input
                  type="text"
                  value={song}
                  name="노래제목"
                  placeholder=""
                  className="text-b1 text-right text-gray-800 font-semibold bg-gray-10 w-[8.8125rem]"
                  onChange={handleChange}
                />
                {!song && (
                  <div className="absolute top-3 transform -translate-y-1/2 pointer-events-none flex items-center text-c1">
                    <span className="text-red text-b1 mr-[0.2rem] font-semibold">
                      *
                    </span>
                    <span className="text-gray-500 text-b1 font-semibold">
                      노래 제목
                    </span>
                  </div>
                )}
                <input
                  type="text"
                  value={bookTitle}
                  name="책제목"
                  placeholder="책 제목"
                  className="text-right text-gray-800 text-c1 bg-gray-10 w-[8.8125rem]"
                  onChange={handleChange}
                />
              </div>
            </>
          ) : (
            <input
              type="text"
              value={memo}
              name="메모"
              placeholder="글을 메모해보세요"
              className="text-gray-800 text-c1 bg-gray-10 w-full"
              onChange={handleChange}
            />
          )}
        </div>
      </div>
      {selected === "music" && (
        <div className="mt-2 mr-10 absolute right-0" onClick={handleToggle}>
          {cardType === "BOOK_WITH_SONG" ? (
            <img src={infoMusicBox} alt="Music Box Icon" />
          ) : (
            <img src={infoMemoBox} alt="Memo Box Icon" />
          )}
        </div>
      )}
    </div>
  );
};

export default OneBookCard;

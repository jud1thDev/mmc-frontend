import React, { useState, useRef, useEffect } from "react";
import BookCard from "../../assets/mainPage/bookcard.svg";
import music from "../../assets/mainPage/music.svg";
import infoMusicBox from "../../assets/mainPage/info-musicbox.svg";
import infoMemoBox from "../../assets/mainPage/info-memobox.svg";

const OneBookCard = ({
  setBottomSheetShow,
  selected,
  setSelected,
  bookNumber = 1,
  readOnly,
  setVisible,
}) => {
  const singerRef = useRef(null);
  const memoRef = useRef(null);

  const [singer, setSinger] = useState("");
  const [song, setSong] = useState("");
  const [memo, setMemo] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [isMusic, setIsMusic] = useState(true);

  useEffect(() => {
    if (!readOnly && selected === "music") {
      if (isMusic) {
        singerRef.current?.focus();
      } else {
        memoRef.current?.focus();
      }
    }
  }, [isMusic, selected]);

  const handleToggle = () => {
    setIsMusic((prev) => !prev);
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
          <img src={BookCard} alt="Book Card" />
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
            <img src={BookCard} alt="Book Card" />
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
          {isMusic ? (
            <>
              <div className="flex flex-row justify-between">
                <p>
                  <span className="text-c1 text-gray-500">OST by</span>{" "}
                  <input
                    type="text"
                    value={singer}
                    name="가수명"
                    ref={singerRef}
                    placeholder="가수명"
                    className="text-c1 text-gray-500 font-semibold bg-gray-10 focus w-[3.25rem]"
                    onChange={handleChange}
                  />
                </p>
                <img src={music} alt="Music Icon" />
              </div>
              <div className="flex flex-col items-end">
                <input
                  type="text"
                  value={song}
                  name="노래제목"
                  placeholder="노래 제목"
                  className="text-b1 text-right text-gray-800 font-semibold bg-gray-10 w-[8.8125rem]"
                  onChange={handleChange}
                />
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
              ref={memoRef}
              placeholder="글을 메모해보세요"
              className="text-gray-800 text-c1 bg-gray-10 w-full"
              onChange={handleChange}
            />
          )}
        </div>
      </div>
      {selected === "music" && (
        <div className="mt-2 mr-5 absolute right-0" onClick={handleToggle}>
          {isMusic ? (
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

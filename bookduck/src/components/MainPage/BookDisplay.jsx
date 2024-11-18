import React, { useEffect } from "react";
import bookCard from "../../assets/mainPage/bookcard.svg";
import music from "../../assets/mainPage/music.svg";
const BookDisplay = ({ bookNumber }) => {
  useEffect(() => {
    console.log(bookNumber);
  }, []);
  return (
    <div className="w-[24.5625rem] relative">
      <div className="flex gap-2  w-full h-[6.9375rem]">
        {/* 첫 번째 북박스 */}
        <div className="flex items-center justify-center w-[5.125rem] h-full bg-gray-custom rounded-[0.375rem] shadow-custom">
          <img src={bookCard} alt="Book Card" />
        </div>
        {/* 두 번째 북박스 */}
        {bookNumber === 2 && (
          <div className="flex items-center justify-center w-[5.125rem] h-full bg-gray-custom rounded-[0.375rem] shadow-custom">
            <img src={bookCard} alt="Book Card" />
          </div>
        )}
        {/* 음악 박스 */}
        <div
          className={`${bookNumber === 1 ? "w-[16.4375rem]" : "w-[10.8125rem]"}
          py-3 px-4 flex flex-col justify-between bg-gray-10 shadow-custom rounded-[0.75rem]`}
        >
          <div className="relative flex flex-row justify-between ">
            <span className="text-c1 text-gray-500 mr-1">by</span>
            <img src={music} alt="Music Icon" />
          </div>
          <div className="relative flex flex-col items-end">
            <span className="text-gray-500 text-b1 font-semibold">
              노래 제목
            </span>
            <span className="text-right text-gray-800 text-c1 bg-gray-10 w-[8.8125rem]">
              책 제목
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDisplay;

import BookListViewDropdown from "./BookListViewDropdown";
import coverEx from "../../assets/common/book-cover-ex.svg";
import menuBar from "../../assets/common/menu-bar.svg";
import emptyImage from "../../assets/recordingPage/rating-empty.svg";
import filledImage from "../../assets/recordingPage/rating-filled.svg";
import { useState } from "react";
//edit이 false면 편집 기능 없이 "읽고 있어요" 상태인 책 확인 in 기록할 책 선택 페이지
//edit이 true, dropdown도 true면 상태 선택 가능한 드롭다운 표시
const BookListView = ({
  register = false,
  bookTitle = "책제목",
  author = "지은이",
  edit = true,
  dropdown = true,
}) => {
  const [rating, setRating] = useState(0);
  return (
    <div className="flex items-center justify-between w-[24.5625rem] h-[7.75rem] pb-[0.5rem] pt-[0.5rem]">
      <div className="flex gap-[12px] items-center w-[252px] h-[108px]">
        <img src={coverEx} alt="coverEx" />
        <div className="flex flex-col gap-1">
          {register && (
            <div className=" text-c1 text-orange-400">직접 등록한 책</div>
          )}
          <div className="text-b1 text-gray-800">{bookTitle}</div>
          <div className=" text-b1 text-gray-500">{author}</div>
          <div className="flex mt-[0.5rem]">
            {[...Array(5)].map((_, index) => (
              <div>
                <img
                  key={index}
                  src={index <= rating ? filledImage : emptyImage} // 채워진 이미지 또는 비워진 이미지 표시
                  alt="rating"
                  className="cursor-pointer" // 이미지 크기 조절
                  onClick={() => setRating(index)} // 클릭 시 별점 설정
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {edit ? (
        dropdown ? (
          <div className="w-[24px] h-[24px] cursor-pointer">
            <img src={menuBar} alt="menuBar" />
          </div>
        ) : (
          <BookListViewDropdown />
        )
      ) : (
        <></>
      )}
    </div>
  );
};
export default BookListView;

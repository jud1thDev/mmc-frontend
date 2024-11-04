import { useState, useRef, useEffect } from "react";

const BookPlot = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    // 텍스트 높이를 계산해서 "더보기" 버튼 표시 여부 결정
    if (contentRef.current.scrollHeight > contentRef.current.clientHeight) {
      setShowMoreBtn(true);
    }
  }, []);

  const text = `책 줄거리 및 소개글이 들어갈 자리입니다. 책 줄거리 및 소개글이 들어갈 자리입니다. 책 줄거리 및 소개글이 들어갈 자리입니다. 책 줄거리 및 소개글이 들어갈 자리입니다. 책 줄거리 및 소개글이 들어갈 자리입니다. 책 줄거리 및 소개글이 들어갈 자리입니다. 책 줄거리 및 소개글이 들어갈 자리입니다. 책 줄거리 및 소개글이 들어갈 자리입니다.`;

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="flex flex-col px-4 gap-6 text-b1 font-semibold">
      기본정보
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex text-b2 text-gray-400 font-regular gap-4 w-[11.3125rem]">
            카테고리
            <div className="text-black">시/소설</div>
          </div>
          <div className="flex text-b2 text-gray-400 font-regular gap-4 w-[11.3125rem]">
            페이지
            <div className="text-black">133pg</div>
          </div>
        </div>
        <div
          className={`text-b2 font-regular overflow-hidden transition-max-height duration-300 ease-in-out cursor-pointer ${
            isExpanded ? "max-h-full" : "max-h-20"
          }`}
          ref={contentRef}
          onClick={toggleExpand}
        >
          {text}
          {showMoreBtn && (
            <span
              className={`px-2 ${
                isExpanded ? "text-blue-400" : "text-gray-400"
              }`}
            >
              {isExpanded ? "접기" : "더보기"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default BookPlot;

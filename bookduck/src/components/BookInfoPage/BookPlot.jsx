import { useState, useRef, useEffect } from "react";

const BookPlot = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const contentRef = useRef(null);

  const text = `책 줄거리  소개글이 들어갈 자리입니다들.책   소개글이 들어갈 자리입니다들.  소개글이 들어갈 자리입니다들.  소개글이 들어갈 자리입니다들.  소개글이 들어갈 자리입니다들.줄거리  소개글이 들어갈 자리입니다.책 줄거리  소개글이 들어갈 자리입니다. 책 줄거리 및 소개글이 들어갈 자리입니다.`;
  useEffect(() => {
    if (contentRef.current) {
      setShowMoreBtn(
        contentRef.current.scrollHeight > contentRef.current.clientHeight
      );
    }
  }, [text]);

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
          ref={contentRef}
          className={`relative text-b2 font-regular overflow-hidden transition-all cursor-pointer ${

            isExpanded ? "max-h-full" : "max-h-24"
          }`}
          onClick={toggleExpand}
        >
          {text}
          {showMoreBtn && (
            <span
              className={` px-2 w-[5.5rem] cursor-pointer ${
                isExpanded
                  ? "text-blue-400"
                  : "absolute bottom-0 right-0 flex justify-end text-gray-400 bg-white-gradiation"

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

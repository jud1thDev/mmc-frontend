import cards from "../../assets/recordingPage/cards.svg";
import WritingTemplate from "./WritingTemplate";
import PublicRange from "./PublicRange";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewWritingComponent = ({
  inputValue,
  handleTextField,
  titleInputValue,
  bookTitleValue = "책제목",
  authorValue = "지은이",
}) => {
  const [reviewPublicState, setReviewPublicState] = useState("전체공개");
  const navigate = useNavigate();
  const handleState = (state) => {
    setReviewPublicState(state);
  };
  return (
    <>
      <div className="flex flex-col gap-[0.38rem]">
        <div className="flex items-center justify-between py-2">
          <div className="text-b1 font-semibold">감상평</div>
          <div className="flex gap-[1.12rem]">
            <div className="flex items-center cursor-pointer">
              <img src={cards} alt="cards" />
              <div
                onClick={() =>
                  navigate("/recording/decoration", {
                    state: {
                      textValue: inputValue,
                      titleValue: titleInputValue,
                      bookTitleValue: bookTitleValue,
                      authorValue: authorValue,
                    },
                  })
                }
                className="text-b2 text-gray-500"
              >
                카드색상
              </div>
            </div>
            <PublicRange
              handleState={handleState}
              publicState={reviewPublicState}
              setPublicState={setReviewPublicState}
            />
          </div>
        </div>
        <div onClick={handleTextField} className="cursor-pointer">
          <WritingTemplate height="14rem">
            <div className="flex flex-col gap-2">
              <input
                value={titleInputValue}
                placeholder="제목"
                className="text-b1 font-semibold bg-transparent"
              />
              <textarea
                value={inputValue}
                className="w-[20.5625rem] h-[9rem] mt-2 bg-transparent text-b2 appearance-none outline-none resize-none"
                placeholder="책에 대한 자유로운 감상을 기록하세요"
              />
            </div>
          </WritingTemplate>
        </div>
      </div>
    </>
  );
};
export default ReviewWritingComponent;

import { useState } from "react";
import starNo from "../../assets/bookinfoPage/star-no.svg";
import starYes from "../../assets/bookinfoPage/star-yes.svg";
import starHalf from "../../assets/bookinfoPage/star-half.svg";
import leftMark from "../../assets/bookinfoPage/left-quotmark.svg";
import rightMark from "../../assets/bookinfoPage/right-quotmark.svg";
import menu from "../../assets/bookinfoPage/menu-vertical.svg";
import BottomSheetModal from "../../components/common/BottomSheetModal";
import ButtonComponent from "../common/ButtonComponent";
import BottomSheetModal2 from "./BottomSheetModal2";

const MyComment = ({ bookData }) => {
  const [bottomSheetShow, setBottomSheetShow] = useState(false);
  const [bottomSheet2Show, setBottomSheet2Show] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState(false);
  const [rating, setRating] = useState(0);

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length <= 25) {
      setInputValue(value);
    }
  };
  const handleCancleClick = () => {
    setVisible(false);
    setTimeout(() => {
      setBottomSheetShow(false);
    }, 200);
  };
  const handleCompleteClick = () => {
    setText(inputValue);
    setVisible(false);
    setTimeout(() => {
      setBottomSheetShow(false);
    }, 200);
  };

  const handleStarClick = (index, event) => {
    //클릭된 위치
    const { offsetX, target } = event.nativeEvent;
    const starWidth = target.offsetWidth;
    const newRating = offsetX < starWidth / 2 ? index + 0.5 : index + 1;
    //클릭 범위 절반 이하인지 구분하기
    if (rating === newRating) {
      setRating(0);
    } else {
      setRating(newRating);
    }
  };

  return (
    <div>
      {/* //책이 서재에 담긴 경우  */}
      {bookData?.userbookId ? (
        <div>
          {/* 한줄평이 존재하는 경우 */}
          {text ? (
            <div>
              <div className="relative flex flex-col items-center p-5 gap-4 bg-gray-10 w-[22.5625rem] rounded-lg">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, index) => {
                    let starSrc = starNo;
                    if (rating > index) {
                      starSrc = rating >= index + 1 ? starYes : starHalf;
                    }
                    return (
                      <img
                        className="cursor-pointer"
                        key={index}
                        src={starSrc}
                        onClick={(event) => handleStarClick(index, event)}
                        alt="star"
                      />
                    );
                  })}
                </div>
                <div className="flex justify-center items-center gap-2 max-h-12 text-b2">
                  <img src={leftMark} />
                  {text}
                  <img src={rightMark} />
                </div>
                <img
                  className="absolute top-5 right-5 cursor-pointer"
                  src={menu}
                  onClick={() => setBottomSheet2Show(true)}
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col items-center px-4 pt-4 pb-5 gap-2 bg-gray-10 w-[22.5625rem] rounded-lg">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, index) => {
                    let starSrc = starNo;
                    if (rating > index) {
                      starSrc = rating >= index + 1 ? starYes : starHalf;
                    }
                    return (
                      <img
                        className="cursor-pointer"
                        key={index}
                        src={starSrc}
                        onClick={(event) => handleStarClick(index, event)}
                        alt="star"
                      />
                    );
                  })}
                </div>
                <textfield
                  className="w-full px-1 py-2 text-b2 text-gray-400 border-b border-[#DDDDDD]"
                  onClick={() => setBottomSheetShow(true)}
                >
                  책에 대한 나의 한줄 평을 작성해주세요!
                </textfield>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="p-4 bg-gray-50 text-b2 text-gray-400 text-center w-[361px] rounded-lg ">
          책을 서재에 담아
          <br />
          별점과 한줄평을 입력해보세요
        </div>
      )}
      <BottomSheetModal
        bottomSheetShow={bottomSheetShow}
        setBottomSheetShow={setBottomSheetShow}
        visible={visible}
        setVisible={setVisible}
      >
        <div className="flex flex-col px-4">
          <div className="flex justify-between items-center">
            <span className="text-st font-semibold">한줄평 작성</span>
            <span
              className="text-b1 text-gray-500 cursor-pointer"
              onClick={handleCancleClick}
            >
              취소
            </span>
          </div>
          <input
            type="text"
            value={inputValue}
            className="mt-[1.625rem] mb-[3.1875rem] px-1 py-2 text-b1 placeholder:text-gray-400 border-b border-[#DDDDDD] w-full"
            placeholder="책에 대한 나의 한줄 평을 작성해주세요! (25자 이내)"
            onChange={handleChange}
          />
          <ButtonComponent
            text="완료"
            disabled={!inputValue}
            onClick={handleCompleteClick}
          />
        </div>
      </BottomSheetModal>
      <BottomSheetModal2
        bottomSheetShow={bottomSheet2Show}
        setBottomSheetShow={setBottomSheet2Show}
        visible={visible2}
        setVisible={setVisible2}
      ></BottomSheetModal2>
    </div>
  );
};
export default MyComment;

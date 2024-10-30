import { useState } from "react";
import starNo from "../../assets/bookinfoPage/star-no.svg";
import menu from "../../assets/bookinfoPage/menu-vertical.svg";
import BottomSheetModal from "../../components/common/BottomSheetModal";
import ButtonComponent from "../common/ButtonComponent";
import BottomSheetModal2 from "./BottomSheetModal2";

const MyComment = () => {
  const [bottomSheetShow, setBottomSheetShow] = useState(false);
  const [bottomSheet2Show, setBottomSheet2Show] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState(false);
  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length <= 20) {
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

  return (
    <div>
      {text ? (
        <div>
          <div className="relative flex flex-col items-center p-5 gap-4 bg-gray-10 w-[361px] rounded-lg">
            <div className="flex items-center gap-1">
              <img src={starNo} />
              <img src={starNo} />
              <img src={starNo} />
              <img src={starNo} />
              <img src={starNo} />
            </div>
            <div className="flex justify-center items-center max-h-12 text-b2 gap-2">
              <span
                className="text-t2 w-[0.875rem] h-[1.25rem] text-gray-500"
                style={{ fontFamily: "Caprasimo" }}
              >
                "
              </span>
              {text}
              <span
                className="text-t2 w-[0.875rem] h-[1.25rem] text-gray-500"
                style={{ fontFamily: "Caprasimo" }}
              >
                "
              </span>
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
          <div className="flex flex-col items-center px-4 pt-4 pb-5 gap-2 bg-gray-10 w-[361px] rounded-lg">
            <div className="flex items-center gap-1">
              <img src={starNo} />
              <img src={starNo} />
              <img src={starNo} />
              <img src={starNo} />
              <img src={starNo} />
            </div>
            <textfield
              className="px-1 py-2 text-b2 text-gray-400 border-b border-[#DDDDDD] w-full"
              onClick={() => setBottomSheetShow(true)}
            >
              책에 대한 나의 한줄 평을 작성해주세요!
            </textfield>
          </div>
        </div>
      )}

      <BottomSheetModal
        bottomSheetShow={bottomSheetShow}
        setBottomSheetShow={setBottomSheetShow}
        visible={visible}
        setVisible={setVisible}
      >
        <div className="flex flex-col">
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
            placeholder="책에 대한 나의 한줄 평을 작성해주세요! (20자 이내)"
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

/*사용법
부모 컴포넌트에서 사용법
const sortingArr = ["정확도순", "최신순"];

const [sort, setSort] = useState("정확도순");

  const handleSortChange = (newSort) => {
    setSort(newSort);
    setVisible(false);
    setTimeout(() => {
      setBottomSheetShow(false);
    }, 200);
  };

      <BottomSheetModal
        bottomSheetShow={bottomSheetShow}
        setBottomSheetShow={setBottomSheetShow}
        visible={visible}
        setVisible={setVisible}
      >
        <SBottomSheetComponent
          title="책 상태"
          options={statusArr}
          currentOption={status}
          handleOption={handleStatusChange}
        />
      </BottomSheetModal>
  
*/

import React from "react";
import trash from "../../assets/common/trash.svg";
import check from "../../assets/common/check.svg";
import Divider2 from "../common/Divider2";
const ListBottomSheet = ({
  title,
  options,
  currentOption,
  handleOption,
  isCancel = false,
  cancelText = "서재담기 취소",
}) => {
  return (
    <div className="flex flex-col gap-3 mb-[2.81rem]">
      {title && (
        <div className="text-st text-gray-800 font-semibold">{title}</div>
      )}
      {options.map((option, index) => {
        return (
          <div key={index}>
            <div
              className="flex flex-row justify-between items-center w-[22.5625rem] h-[2rem] py-3 px-1"
              onClick={() => handleOption(option)}
            >
              <div
                className={`text-b2 text-gray-500 ${
                  currentOption === option && "text-special"
                }`}
              >
                {option}
              </div>
              {currentOption === option && <img src={check} alt="check-icon" />}
            </div>
            {index < options.length - 1 && <Divider2 />}
          </div>
        );
      })}
      {isCancel && (
        <div className="flex items-center gap-1 w-[22.2625rem] h-[3rem] px-3 py-3 bg-gray-10 rounded-2 mt-4">
          <img src={trash} className="w-6 h-6" />
          <span className="text-btn3 text-gray-500">{cancelText}</span>
        </div>
      )}
    </div>
  );
};

export default ListBottomSheet;

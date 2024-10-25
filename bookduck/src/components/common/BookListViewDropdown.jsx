import { useState } from "react";
import downArrow from "../../assets/common/down-arrow.svg";

const dropdownList = [
  {
    id: 0,
    name: "읽고 싶어요",
  },
  {
    id: 1,
    name: "읽고 있어요",
  },
  {
    id: 2,
    name: "다 읽었어요",
  },
  {
    id: 3,
    name: "중단했어요",
  },
  {
    id: 4,
    name: "서재 담기",
  },
];
const BookListViewDropdown = (dropdownActive) => {
  const [dropdownView, setDropdownView] = useState(false);
  const [initState, setInitState] = useState("서재 담기");

  const handleClickDropdown = () => {
    if (!dropdownActive) {
      setDropdownView(!dropdownView);
    }
  };
  const onChangeState = (value) => {
    setInitState(value);
    setDropdownView(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClickDropdown}
        className=" flex justify-between items-center w-[84px] h-[28px] p-[6px]"
      >
        <span className="text-c1 text-gray-500 cursor-pointer">
          {initState}
        </span>
        <img src={downArrow} alt="downArrow" />
      </button>

      <div
        className={`absolute top-[35px] left-[-15px] w-[96px] h-[200px] rounded-[8px] bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          dropdownView ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {dropdownView && (
          <ul className=" flex  flex-col justify-center items-center ">
            {dropdownList.map((item, index) => (
              <li
                key={item.id}
                onClick={() => onChangeState(item.name)}
                className={`flex justify-center w-[96px] text-c1 text-gray-500 p-[12px] ${
                  index === 0 ? "rounded-t-[8px]" : ""
                } ${
                  index === dropdownList.length - 1 ? "rounded-b-[8px]" : ""
                } hover:bg-gray-50 cursor-pointer`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default BookListViewDropdown;

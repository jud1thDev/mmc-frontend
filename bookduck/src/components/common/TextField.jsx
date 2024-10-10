import { useState } from "react";
//textfield의 type이 제목 field면 type=="제목", 내용 field면 type=="내용"
//내용 type의 경우 title을 prop으로 입력 받음
//수정 가능한 textfield의 경우 edit 값이 true, 이 경우 수정 관련 로직을 error, handleEdit로 넘겨줌

const TextField = ({ type, title, edit, error, handleEdit }) => {
  const [inputValue, setInputValue] = useState("");
  const handleValue = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      {type == "내용" && (
        <div className="flex gap-[8px]">
          <div className="h-[16px] text-c1 text-gray-400">{title}</div>
          {error && (
            <div className="text-c1 text-orange-600">필수입력란입니다!</div>
          )}
        </div>
      )}
      <div className="flex relative ">
        <input
          value={inputValue}
          onChange={handleValue}
          placeholder={type}
          className={`w-[361px] h-[48px] pl-[4px] pr-[4px] pb-[12px] pt-[12px]  ${
            error
              ? "border-b-[1px] border-orange-600"
              : "border-b-[1px] border-gray-200"
          } text-b1 text-gray-800`}
        />
        {!edit && (
          <div
            onClick={handleEdit}
            className="absolute top-[16px] right-[40px] text-c1 text-orange-400 cursor-pointer"
          >
            수정하기
          </div>
        )}
      </div>
    </>
  );
};
export default TextField;

import { useState } from "react";
//textfield의 type이 제목 field면 type=="제목", 내용 field면 type=="내용"
//내용 type의 경우 title을 prop으로 입력 받음
//확인 가능한 textfield의 경우 edit 값이 true, 이 경우 확인 관련 로직을 error, handleEdit, isSubmitted로 넘겨줌
//handleEdit에서 유효성 검사를 한 후 error값을 prop으로 넘겨줌
//handleEdit 함수 수행 시에는 isSubmitted를 true값으로 바꿔 상태 업데이트 (default 상태와, 확인 후 error==true / false 상태를 구분하기 위함)
//defaultType의 경우 에러메시지가 input 아래에 생기는 게 아니라 title 옆에 생김
const TextField = ({
  type,
  type2 = "text",
  name = "",
  title,
  placeholder,
  check = true,
  error = null,
  inputError,
  nickname = false,
  handleEdit,
  isSubmitted,
  defaultType,
  handleValue,
  inputValue,
}) => {
  return (
    <>
      {type === "내용" && (
        <div className="flex gap-[8px]">
          <div className="h-[16px] text-c1 text-gray-400">{title}</div>
          {defaultType && error && (
            <div className="text-c1 text-orange-600">필수입력란입니다!</div>
          )}
        </div>
      )}
      <div className="flex relative">
        <input
          type={type2}
          name={name}
          value={inputValue}
          onChange={handleValue}
          placeholder={placeholder}
          className={`w-[361px] h-[48px] px-[4px] py-[12px] text-b1 text-gray-800 border-b-[1px] ${
            !isSubmitted || error === null
              ? "border-gray-200"
              : error === true
              ? "border-red"
              : "border-blue-200"
          }`}
        />
        {check && (
          <div
            onClick={inputError ? null : handleEdit}
            className="absolute top-[16px] right-0 text-b2 text-gray-600 cursor-pointer "
          >
            확인
          </div>
        )}
      </div>
      {nickname && !defaultType && !isSubmitted && (
        <p
          className={`text-c1 ${
            inputError ? "text-orange-600" : "text-gray-400"
          } mt-2`}
        >
          8자 이내로 작성해야하며, 띄어쓰기와 특수문자는 사용할 수 없어요.
        </p>
      )}

      {!defaultType && isSubmitted && !inputError && (
        <div
          className={`text-c1 ${
            !isSubmitted || error === null
              ? ""
              : error === true
              ? "text-red"
              : "text-blue-200"
          }`}
        >
          {!isSubmitted || error === null
            ? ""
            : error === true
            ? "이미 사용 중인 이름입니다!"
            : "사용 가능한 이름입니다!"}
        </div>
      )}
    </>
  );
};
export default TextField;

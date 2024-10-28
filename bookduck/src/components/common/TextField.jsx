import { useState } from "react";
//textfield의 type이 제목 field면 type=="제목", 내용 field면 type=="내용"
//내용 type의 경우 title을 prop으로 입력 받음
//확인 가능한 textfield의 경우 edit 값이 true, 이 경우 확인 관련 로직을 error, handleEdit, isSubmitted로 넘겨줌
//handleEdit에서 유효성 검사를 한 후 error값을 prop으로 넘겨줌
//handleEdit 함수 수행 시에는 isSubmitted를 true값으로 바꿔 상태 업데이트 (default 상태와, 확인 후 error==true / false 상태를 구분하기 위함)
//defaultType의 경우 에러메시지가 input 아래에 생기는 게 아니라 title 옆에 생김
const TextField = ({
  type,
  title,
  placeholder,
  check = true,
  error,
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
          value={inputValue}
          onChange={handleValue}
          placeholder={placeholder}
          className={`w-[361px] h-[48px] px-[4px] py-[12px]  ${
            !isSubmitted
              ? "border-b-[1px] border-gray-200"
              : error === true
              ? "border-b-[1px] border-orange-600"
              : "border-b-[1px] border-blue"
          } text-b1 text-gray-800`}
        />
        {check && (
          <div
            onClick={handleEdit}
            className="absolute top-[16px] right-0 text-b2 text-gray-600 cursor-pointer "
          >
            확인
          </div>
        )}
      </div>
      {/* 확인 버튼이 클릭된 경우에만 메시지 표시 */}
      {!defaultType && isSubmitted && (
        <div className={`text-c1 ${error ? "text-orange-600" : "text-blue"}`}>
          {error ? "이미 사용 중인 이름입니다!" : "사용 가능한 이름입니다!"}
        </div>
      )}
    </>
  );
};
export default TextField;

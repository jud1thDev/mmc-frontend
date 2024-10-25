import { useState } from "react";
import record_icon from "../../../assets/recordingPage/record-icon.svg";
const FloatingRecordButton = () => {
  const [text, setText] = useState(true); //텍스트까지 다 보이는지 아닌지 상태관리
  return (
    <div className="flex gap-[0.75rem] justify-center items-center w-[7.8rem] h-[3.5rem] p-[1rem] rounded-[6.25rem] bg-gray-700">
      <img src={record_icon} alt="record_icon" />
      <div className="text-b1 font-semibold text-[#FFFFFF]">기록하기</div>
    </div>
  );
};
export default FloatingRecordButton;

import { useEffect, useState } from "react";
import record_icon from "../../../assets/recordingPage/record-icon.svg";
import record_icon_circle from "../../../assets/recordingPage/record-circle-icon.svg";
import { useNavigate } from "react-router-dom";
const FloatingRecordButton = () => {
  const [text, setText] = useState(true); //텍스트까지 다 보이는지 아닌지 상태관리
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (text) {
      timer = setTimeout(() => {
        setText(false);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [text]);

  const handleClick = () => {
    setText(true);
  };

  const handleRecording = () => {
    navigate("/selectBook");
  };

  return (
    <div className="fixed bottom-[6.38rem] flex justify-end w-[24.5625rem] cursor-pointer">
      <div
        className={`transition-all duration-500 ease-in-out ${
          text ? "opacity-100" : "opacity-0"
        }`}
      >
        {text ? (
          <div
            onClick={handleRecording}
            className="flex gap-[0.75rem] justify-center items-center w-[7.8rem] h-[3.5rem] p-[1rem] mr-[1rem] rounded-[6.25rem] bg-gray-700"
          >
            <img src={record_icon} alt="record_icon" />
            <div className="text-b1 font-semibold text-[#FFFFFF]">기록하기</div>
          </div>
        ) : null}
      </div>
      <div
        className={`transition-all duration-500 ease-in-out transfrom ${
          text ? "opacity-0" : "opacity-100"
        }`}
      >
        {!text ? (
          <img
            onClick={handleClick}
            className="mr-[1rem] cursor-pointer"
            src={record_icon_circle}
            alt="record_icon_circle"
          />
        ) : null}
      </div>
    </div>
  );
};
export default FloatingRecordButton;

import { useEffect, useState } from "react";
import record_icon from "../../assets/recordingPage/record-icon.svg";
import record_icon_circle from "../../assets/recordingPage/record-circle-icon.svg";
import { useNavigate } from "react-router-dom";
const FloatingRecordButton = ({ handleNavigate, text = true }) => {
  const [internalText, setInternalText] = useState(text);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (internalText) {
      timer = setTimeout(() => {
        setInternalText(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [internalText]);

  const handleClick = () => {
    setInternalText(true);
  };

  return (
    <>
      <div
        className={`transition-all duration-500 ease-in-out z-50 ${
          internalText ? "opacity-100" : "opacity-0"
        }`}
      >
        {internalText ? (
          <div
            onClick={handleNavigate}
            className="flex gap-[0.75rem] justify-center items-center w-[7.8rem] h-[3.5rem] p-[1rem] mr-[1rem] rounded-[6.25rem] bg-gray-700"
          >
            <img src={record_icon} alt="record_icon" />
            <div className="text-b1 font-semibold text-[#FFFFFF]">기록하기</div>
          </div>
        ) : null}
      </div>
      <div
        className={`transition-all duration-500 ease-in-out transfrom ${
          internalText ? "opacity-0" : "opacity-100"
        }`}
      >
        {!internalText ? (
          <img
            onClick={handleClick}
            className="mr-[1rem] cursor-pointer"
            src={record_icon_circle}
            alt="record_icon_circle"
          />
        ) : null}
      </div>
    </>
  );
};
export default FloatingRecordButton;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavbar from "../../components/common/BottomNavbar";
import StatusBar from "../../components/common/StatusBar";
import Header2 from "../../components/common/Header2";
import ReadingSpaceComponent from "../../components/MainPage/ReadingSpaceComponent";
import right from "../../assets/common/right-yellow.svg";
import mainDuck from "../../assets/common/main-duck.svg";

const MainPage = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState("bg-gray-50");
  const [isNavBar, setIsNavBar] = useState("true");
  useEffect(() => {}, [isNavBar]);

  return (
    <div className={`${color} relative overflow-hidden h-screen`}>
      <StatusBar />
      <div className="px-4">
        <Header2 />
      </div>
      <div className="pl-5 mt-[1.75rem]">
        <div className="text-t2 font-semibold text-black">유저닉네임님</div>
        <div className="text-t2 font-semibold text-black mt-[0.38rem]">
          꾸준한 독서 함께해요!
        </div>
        <div className="flex flex-col w-[10.625rem] h-[6rem] bg-white rounded-[0.75rem] mt-[2.69rem] pl-4 pr-5 pt-3 gap-2">
          <span className="text-b2 text-gray-500 font-semibold">
            현재 나의 기록수
          </span>
          <div className="flex flex-row">
            <div className="flex gap-[0.38rem]">
              <p className="w-[2.25rem] h-[2.75rem] bg-orange-50 baloo text-[2rem] text-orange-300 font-bold text-center">
                0
              </p>
              <p className="w-[2.25rem] h-[2.75rem] bg-orange-50 baloo text-[2rem] text-orange-300 font-bold text-center">
                2
              </p>
            </div>
            <div className="ml-[0.62rem] self-end text-b2 text-gray-500 font-semibold">
              개
            </div>
          </div>
        </div>
        <button
          className="flex justify-center items-center gap-[0.38rem] w-[10.625rem] py-1 px-3 bg-white rounded-[0.625rem] mt-[0.81rem]"
          onClick={() => navigate("/recording")}
        >
          <span className="text-b2 text-gray-500 font-semibold">
            독서 리포트 보러가기
          </span>
          <img src={right} alt="arrow" />
        </button>
        <img src={mainDuck} className="absolute top-[11.42rem] left-[9rem]" />
        <ReadingSpaceComponent setColor={setColor} setIsNavBar={setIsNavBar} />
      </div>
      {isNavBar && <BottomNavbar />}
    </div>
  );
};

export default MainPage;

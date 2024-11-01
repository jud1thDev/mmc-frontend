import React, { useState } from "react";
import BottomNavbar from "../../components/common/BottomNavbar";
import StatusBar from "../../components/common/StatusBar";
import Header2 from "../../components/common/Header2";
import Right from "../../assets/common/right-yellow.svg";
import MainDuck from "../../assets/common/main-duck.svg";
import ReadingSpaceComponent from "../../components/MainPage/ReadingSpaceComponent";

const MainPage = () => {
  const [color, setColor] = useState("bg-gray-50");

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
              <div className="w-[2.25rem] h-[2.75rem] bg-orange-50"></div>
              <div className="w-[2.25rem] h-[2.75rem] bg-orange-50"></div>
            </div>
            <div className="ml-[0.62rem] self-end text-b2 text-gray-500 font-semibold">
              개
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[0.38rem] w-[10.625rem] py-1 px-3 bg-white rounded-[0.625rem] mt-[0.81rem]">
          <span className="text-b2 text-gray-500 font-semibold">
            독서 리포트 보러가기
          </span>
          <img src={Right} />
        </div>
        <img src={MainDuck} className="absolute top-[11.42rem] left-[9rem]" />
        <ReadingSpaceComponent setColor={setColor} />
      </div>
      <BottomNavbar />
    </div>
  );
};

export default MainPage;

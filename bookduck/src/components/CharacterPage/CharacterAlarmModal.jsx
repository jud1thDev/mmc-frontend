// 부모 컴포넌트에 아래 코드 추가하고 onClick={toggleAlarmModal}까지 props로 전달해주면 됩니다
// const [isAlarmModalOpen, setIsAlarmModalOpen] = useState(false);
// const toggleAlarmModal = () => {
//     setIsAlarmModalOpen(!isAlarmModalOpen);
//   };
// {isAlarmModalOpen && <CharacterAlarmModal onClick={toggleAlarmModal} />}

import { useEffect, useState } from "react";
import teacherDuck from "../../assets/common/teacher-duck.png";
import Confetti from "react-confetti";
const CharacterAlarmModal = ({ onClick }) => {
  const [isConfettiActive, setIsConfettiActive] = useState(true);
  const [isRecycling, setIsRecycling] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRecycling(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[200]">
      <Confetti
        run={isConfettiActive}
        recycle={isRecycling}
        numberOfPieces={200}
        width={window.innerWidth}
        height={window.innerHeight}
      />
      <div className="relative flex flex-col items-center bg-white w-[330px] rounded-[20px] z-[210]">
        <img
          className="absolute top-[-122px] z-[200]"
          src={teacherDuck}
          alt="teacher duck"
        />

        <div className="flex flex-col py-4 gap-3 w-full">
          <div className="flex flex-col gap-3.5 pb-5">
            <div className="flex justify-center items-center text-t2 text-center font-semibold h-[3rem]">
              축하해요!
            </div>
            <div className="flex flex-col items-center px-7 gap-3">
              {/* 이부분에 배지 이미지 추가  */}
              {/* 배지 이미지는 publlic/characterPage/badges 폴더에 타입별로 저장되어있어서
              api로 불러온 badgeType과 badgeName을 그대로 url에 넣어 이미지를 불러오면 됩니다. */}
              {/* <img
          className="w-[9.375rem] h-[9.375rem]"
          src={`assets/characterPage/badges/${badgeInfo?.badgeType}/${badgeInfo?.badgeName}.png`}
          alt={`${badgeInfo?.badgeName} badge`}
        /> */}
              <div className="text-b1">
                북덕이 <span className="font-bold">레벨2</span>로 레벨업했어요
              </div>
            </div>
          </div>
          <div className="px-4 h-12 w-full">
            <button
              className="text-b1 font-semibold text-white bg-gray-700 p-[10px] w-[100%] h-12 rounded-[8px]"
              onClick={onClick}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterAlarmModal;

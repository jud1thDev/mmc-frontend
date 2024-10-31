import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import menu from "../../assets/mainPage/menu-vertical.svg";
import FloatingComponent from "../../components/common/FloatingRecordButton";
import ButtonComponent from "../common/ButtonComponent";

const ReadingSpaceComponent = () => {
  const recentBooks = [];
  const initialHeight = 485;
  const expandedHeight = 885;
  const hideButtonThreshold = initialHeight + 50;

  const [{ height }, api] = useSpring(() => ({
    height: initialHeight,
    onChange: () => {
      setFloatingVisible(height.get() < hideButtonThreshold);
    },
  }));
  const [isFloatingVisible, setFloatingVisible] = useState(true);

  const bind = useDrag(
    ({ movement: [, my], memo = height.get(), last }) => {
      if (last) {
        api.start({ height: my < -100 ? expandedHeight : initialHeight });
      } else {
        const newHeight = Math.max(
          initialHeight,
          Math.min(expandedHeight, memo - my)
        );
        api.start({ height: newHeight });
      }
      return memo;
    },
    { axis: "y" }
  );

  return (
    <animated.div
      {...bind()}
      style={{ height, boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.10)" }}
      className="fixed w-[24.5625rem] bottom-0 left-0 right-0 mx-auto max-w-md bg-white rounded-t-[1.875rem] shadow-lg cursor-pointer overflow-hidden"
    >
      <div className="relative">
        <div className="h-1 w-12 bg-gray-300 rounded-full mx-auto my-3"></div>
        <div className="flex flex-row items-center justify-between px-5 pt-1 mb-[5rem]">
          <p className="text-btn3 text-gray-500">리딩 스페이스</p>
          <img src={menu} alt="menu" />
        </div>
        {recentBooks.length === 0 && (
          <div className="flex flex-col items-center h-[6rem] z-[0]">
            <p className="text-c1 text-gray-500">
              리딩스페이스가 텅 비어있네요!
            </p>
            <p className="text-b1 text-gray-500 mt-[0.38rem] mb-4 font-semibold">
              나만의 리딩 스페이스를 꾸며보세요
            </p>
            <ButtonComponent
              text="추가하기"
              type="secondary"
              color="orange"
              size="small"
              onClick={() => alert("메시지")}
            />
          </div>
        )}
        {isFloatingVisible && (
          <div className="absolute right-1 bottom-[-18rem] z-[100]">
            {" "}
            {/* z-index를 높게 설정 */}
            <FloatingComponent />
          </div>
        )}
      </div>
    </animated.div>
  );
};

export default ReadingSpaceComponent;

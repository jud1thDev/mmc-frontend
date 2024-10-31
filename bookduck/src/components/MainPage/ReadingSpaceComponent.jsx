import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

const ReadingSpaceComponent = () => {
  const initialHeight = 545;
  const expandedHeight = 885;

  const [{ height }, api] = useSpring(() => ({ height: initialHeight }));

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
      <div className="h-1 w-12 bg-gray-300 rounded-full mx-auto my-3"></div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">리딩 스페이스</h2>
        <p className="text-gray-600">
          여기에 드래그하여 나타나는 내용을 추가하세요
        </p>
      </div>
    </animated.div>
  );
};

export default ReadingSpaceComponent;

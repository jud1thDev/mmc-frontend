import React from "react";

const BottomBackgroundComponent = ({ Button }) => {
  return (
    <div className="flex fixed bottom-0 z-50 w-[24.5624rem] px-[1rem] pb-[2rem] pt-[1rem] bg-white">
      {Button}
    </div>
  );
};

export default BottomBackgroundComponent;

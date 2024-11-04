import { useState } from "react";
import down from "../../assets/common/down-gray.svg";
import BottomSheetModal from "../common/BottomSheetModal";
import Divider2 from "../common/Divider2";

const PublicRange = ({ publicState, handleState }) => {
  const [viewBottomSheet, setViewBottomSheet] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        onClick={() => setViewBottomSheet(true)}
        className="flex gap-[0.13rem] items-center cursor-pointer"
      >
        <div className="text-b2 text-gray-500">{publicState}</div>
        <img src={down} alt="down" />
      </div>
      <BottomSheetModal
        bottomSheetShow={viewBottomSheet}
        setBottomSheetShow={setViewBottomSheet}
        visible={visible}
        setVisible={setVisible}
      >
        <div className="mb-4">
          <div className="text-st font-semibold text-gray-800">공개 범위</div>
          <div className="flex flex-col mt-3">
            <div
              onClick={() => handleState("전체공개")}
              className={`h-12 py-4 text-b2 ${
                publicState === "전체공개" ? "text-orange-400" : "text-gray-500"
              } cursor-pointer`}
            >
              전체공개
            </div>
            <Divider2 />
            <div
              onClick={() => handleState("친구공개")}
              className={`h-12 py-4 text-b2 ${
                publicState === "친구공개" ? "text-orange-400" : "text-gray-500"
              } cursor-pointer`}
            >
              친구공개
            </div>
            <Divider2 />

            <div
              onClick={() => handleState("비공개")}
              className={`h-12 py-4 text-b2 ${
                publicState === "비공개" ? "text-orange-400" : "text-gray-500"
              } cursor-pointer`}
            >
              비공개
            </div>
          </div>
        </div>
      </BottomSheetModal>
    </>
  );
};
export default PublicRange;

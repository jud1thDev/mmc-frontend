import React from "react";
import { createPortal } from "react-dom";

const BottomSheetModal = ({
  bottomSheetShow,
  setBottomSheetShow,
  children,
}) => {
  const handleBackdropClick = () => {
    setBottomSheetShow(false);
  };

  if (!bottomSheetShow) return null;

  const slideModal = (
    <div
      onClick={handleBackdropClick}
      className={`${
        bottomSheetShow ? "bg-slate-500" : "rgba(0,0,0,0)"
      }  flex justify-center w-full h-screen z-50 relative`}
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className="bg-pink-200 absolute bottom-0 w-[24.5625rem] shadow-lg"
      >
        {children}
      </section>
    </div>
  );

  return createPortal(slideModal, document.getElementById("modal"));
};

export default BottomSheetModal;

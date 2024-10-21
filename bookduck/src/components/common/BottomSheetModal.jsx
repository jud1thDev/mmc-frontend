import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
const BottomSheetModal = ({
  title,
  isCancel = "true",
  bottomSheetShow,
  setBottomSheetShow,
  children,
}) => {
  const handleBackdropClick = () => {
    setBottomSheetShow(false);
  };

  if (!bottomSheetShow) return null;

  const slideModal = (
    <div className="flex justify-center">
      <div
        onClick={handleBackdropClick}
        className={`${
          bottomSheetShow ? "bg-black bg-opacity-50" : "bg-transparent"
        }   w-[24.5625rem] h-screen z-30 fixed top-0 transition-colors duration-300`}
      >
        <section
          onClick={(e) => e.stopPropagation()}
          className="bg-white animate-slideUp bg-opacity-100 absolute bottom-0 w-[24.5625rem] h-[35.5625rem] z-50 rounded-t-xl px-[1rem] pt-[2rem] pb-[1rem]"
        >
          <div className="flex justify-between mb-[1.62rem]">
            <span className="text-st font-semibold">{title}</span>
            {isCancel && (
              <button
                onClick={() => setBottomSheetShow(false)}
                className="text-btn2 text-gray-500"
              >
                취소
              </button>
            )}
          </div>
          {children}
        </section>
      </div>
    </div>
  );

  return createPortal(slideModal, document.getElementById("modal"));
};

export default BottomSheetModal;

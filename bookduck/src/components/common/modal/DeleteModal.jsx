import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 삭제 버튼 클릭 시 onClick 함수 실행
// 취소 버튼 클릭 시 handleCancel 함수 실행 (모달창 set상태 함수 넣어주면 될 거 같아요)
const DeleteModal = ({ onClick, handleCancel }) => {
  return (
    <>
      <div className="flex justify-center items-center fixed top-0 z-30 w-[24.5625rem] h-screen bg-black bg-opacity-50">
        <div className="flex flex-col items-center justify-center w-[18rem] h-[10.5rem] px-4 rounded-[1rem] bg-[#FFFFFF] text-center">
          <div className="flex flex-col gap-2 my-3">
            <div className="text-st text-gray-800 font-semibold">
              정말 삭제하시겠어요?
            </div>
            <div className="text-b2 text-gray-400">
              삭제된 카드는 다시 복구할 수 없어요.
            </div>
          </div>
          <div className="flex gap-3 mt-2">
            <button
              onClick={onClick}
              className="w-[7.625rem] h-[3rem] p-[0.62rem] rounded-[0.5rem] bg-gray-600 text-b1 text-white font-semibold"
            >
              삭제
            </button>
            <button
              onClick={() => handleCancel(false)}
              className="w-[7.625rem] h-[3rem] p-[0.62rem] rounded-[0.5rem] bg-orange-300 text-b1 text-white font-semibold"
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteModal;

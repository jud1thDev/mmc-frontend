/*사용방법
부모 컴포넌트에
const [bottomSheetShow, setBottomSheetShow] = useState(false);
const [visible, setVisible] = useState(false);
를 하고

부모 컴포넌트의 부분을 클릭할 시 이벤트가 일어나게 하고 싶으면
const handleSortChange = (newSort) => {
    setSort(newSort);
    setVisible(false);
    setTimeout(() => {
      setBottomSheetShow(false);
    }, 200);
  };
와 같이 setVisible(false)를 해서 흰색 부분이 내려가는 효과를 발생시키고,
그 후에 setBottomSheetShow(false)가 되도록 합니다.

<BottomSheetModal
        bottomSheetShow={bottomSheetShow}
        setBottomSheetShow={setBottomSheetShow}
        visible={visible}
        setVisible={setVisible}
> 내용 </BottomSheetModal>
*/

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import editIcon from "../../assets/bookinfoPage/edit.svg";
import deleteIcon from "../../assets/bookinfoPage/trash.svg";
import Divider2 from "../common/Divider2";

const BottomSheetModal2 = ({
  bottomSheetShow,
  setBottomSheetShow,
  visible,
  setVisible,
  handleEdit,
  handleDelete,
  deleteOnly = false,
  children,
}) => {
  // 모달이 열릴 때 visible을 true로 설정해 애니메이션을 실행
  useEffect(() => {
    if (bottomSheetShow) {
      setVisible(true);
    }
  }, [bottomSheetShow]);

  // 모달이 닫힐 때 애니메이션 후 상태 변경
  const handleBackdropClick = () => {
    setVisible(false); // 닫는 애니메이션 시작
    setTimeout(() => {
      setBottomSheetShow(false); // 애니메이션이 끝난 후 모달 완전히 닫기
    }, 300);
  };

  // 모달이 닫힌 후  언마운트
  if (!bottomSheetShow && !visible) return null;

  const slideModal = (
    <div className="flex justify-center">
      <div
        onClick={handleBackdropClick}
        className={`${
          visible ? "bg-black bg-opacity-50" : "bg-transparent"
        } w-[24.5625rem] h-screen z-30 fixed top-0 transition-colors duration-300`}
      >
        <section
          onClick={(e) => e.stopPropagation()}
          className={`bg-white ${
            visible ? "animate-slideUp" : "animate-slideDown"
          } bg-opacity-100 absolute bottom-0 w-[24.5625rem] h-fit z-50 rounded-t-xl  transition-transform duration-300`}
        >
          <div className="rounded-t-xl px-4 pt-5 pb-[3.125rem] bg-gray-50">
            <div className="flex flex-col bg-white rounded-lg">
              {!deleteOnly && (
                <>
                  <div
                    onClick={handleEdit}
                    className="flex items-center p-4 gap-3 text-btn2 cursor-pointer"
                  >
                    <img className="w-6 h-6" src={editIcon} />
                    수정하기
                  </div>
                  <Divider2 />
                </>
              )}
              <div
                onClick={handleDelete}
                className="flex items-center p-4 gap-3 text-btn2 cursor-pointer"
              >
                <img src={deleteIcon} />
                삭제하기
              </div>
            </div>
            <div
              className="flex justify-center items-center mt-[2.5625rem] p-4 bg-white rounded-lg cursor-pointer"
              onClick={handleBackdropClick}
            >
              취소
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  return createPortal(slideModal, document.getElementById("modal"));
};

export default BottomSheetModal2;

import { useState } from "react";
import BottomSheetModal from "../common/BottomSheetModal";
import BottomSheetMenuComponent from "../common/BottomSheetMenuComponent";
import horizontal_menu from "../../assets/common/horizontal-menu-gray.svg";
import trash from "../../assets/common/trash.svg";
import BottomSheetModal2 from "../BookInfoPage/BottomSheetModal2";
import DeleteModal from "../common/modal/DeleteModal";

const BookCaseComponent = ({ bookCaseTitle = "책장명", bookList = [] }) => {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCancel = () => {
    setVisible(false); // 닫는 애니메이션 시작
    setTimeout(() => {
      setShowMenuModal(false); // 애니메이션이 끝난 후 모달 완전히 닫기
    }, 300);
  };

  const handleDelete = () => {
    handleCancel();
    setShowDeleteModal(true);
  };

  const handleDeleteModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="p-4 border-[0.0625rem] border-gray-100 rounded-[0.5rem] bg-gray-10">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="text-b2 text-gray-800">{bookCaseTitle}</div>
              <div className="text-b2 text-orange-400">({bookList.length})</div>
            </div>
            <div
              onClick={() => setShowMenuModal(true)}
              className="cursor-pointer"
            >
              <img src={horizontal_menu} />
            </div>
          </div>
          <div className="flex gap-2">
            {bookList.map((it, index) => (
              <div key={index} className="w-16 h-23">
                <img src={it.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {showMenuModal && (
        <BottomSheetModal2
          bottomSheetShow={showMenuModal}
          setBottomSheetShow={setShowMenuModal}
          visible={visible}
          setVisible={setVisible}
          handleDelete={handleDelete}
          deleteOnly={true}
        ></BottomSheetModal2>
      )}
      {showDeleteModal && (
        <DeleteModal
          title="정말 삭제하시겠어요?"
          content="삭제된 카드는 다시 복구할 수 없어요."
          leftBtnText="삭제"
          rightBtnText="취소"
          onLeftClick={() => {}}
          onRightClick={handleDeleteModal}
        />
      )}
    </>
  );
};
export default BookCaseComponent;

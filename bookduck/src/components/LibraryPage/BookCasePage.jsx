import BookCaseComponent from "./BookCaseComponent";
import book_case_ex1 from "../../assets/libraryPage/bookcase-ex1.svg";
import book_case_ex2 from "../../assets/libraryPage/bookcase-ex2.svg";
import book_case_ex3 from "../../assets/libraryPage/bookcase-ex3.svg";
import BottomNavbar from "../common/BottomNavbar";
import DeleteModal from "../common/modal/DeleteModal";
import { useState } from "react";

const bookList = [
  { img: book_case_ex1 },
  { img: book_case_ex2 },
  { img: book_case_ex3 },
];

const bookList2 = [];

const BookCasePage = () => {
  const [showMenuBottomSheet, setShowMenuBottomSheet] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCancel = () => {
    setVisible(false); // 닫는 애니메이션 시작
    setTimeout(() => {
      setShowMenuBottomSheet(false); // 애니메이션이 끝난 후 모달 완전히 닫기
    }, 300);
  };

  //메뉴 바텀시트에서 삭제 버튼 누르면 실행
  const handleDelete = () => {
    handleCancel();
    setShowDeleteModal(true);
  };

  //삭제 모달창에서 취소 버튼 누르면 실행
  const handleDeleteModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="h-[44rem] overflow-y-auto ">
        <div className="flex flex-col gap-4 mt-4 mx-4">
          <BookCaseComponent
            bookCaseTitle="내 책장"
            bookList={bookList2}
            showMenuBottomSheet={showMenuBottomSheet}
            setShowMenuBottomSheet={setShowMenuBottomSheet}
            visible={visible}
            setVisible={setVisible}
            handleDelete={handleDelete}
          />
          <BookCaseComponent bookCaseTitle="책장명" bookList={bookList} />
          <BookCaseComponent bookCaseTitle="내 책장2" bookList={bookList} />
          <BookCaseComponent bookCaseTitle="책장명" bookList={bookList} />
          <BookCaseComponent bookCaseTitle="내 책장2" bookList={bookList} />
        </div>
        <div className="h-[6rem] bg-transparent"></div>
      </div>
      <BottomNavbar />
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
export default BookCasePage;

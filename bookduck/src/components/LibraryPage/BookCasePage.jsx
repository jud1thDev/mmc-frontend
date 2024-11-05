import BookCaseComponent from "./BookCaseComponent";
import BottomNavbar from "../common/BottomNavbar";
import DeleteModal from "../common/modal/DeleteModal";
import { useState } from "react";
import BottomSheetModal2 from "../BookInfoPage/BottomSheetModal2";
import book_case_ex1 from "../../assets/libraryPage/bookcase-ex1.svg";
import book_case_ex2 from "../../assets/libraryPage/bookcase-ex2.svg";
import book_case_ex3 from "../../assets/libraryPage/bookcase-ex3.svg";

const bookList = [
  { id: 0, title: "책제목1", author: "지은이1", img: book_case_ex1 },
  { id: 1, title: "책제목1", author: "지은이1", img: book_case_ex1 },
  { id: 2, title: "책제목2", author: "지은이2", img: book_case_ex2 },
  { id: 3, title: "책제목3", author: "지은이3", img: book_case_ex3 },
  { id: 4, title: "책제목1", author: "지은이1", img: book_case_ex1 },
  { id: 5, title: "책제목2", author: "지은이2", img: book_case_ex2 },
  { id: 6, title: "책제목3", author: "지은이3", img: book_case_ex3 },
  { id: 7, title: "책제목1", author: "지은이1", img: book_case_ex1 },
  { id: 8, title: "책제목2", author: "지은이2", img: book_case_ex2 },
  { id: 9, title: "책제목3", author: "지은이3", img: book_case_ex3 },
  { id: 10, title: "책제목1", author: "지은이1", img: book_case_ex1 },
  { id: 11, title: "책제목2", author: "지은이2", img: book_case_ex2 },
  { id: 12, title: "책제목3", author: "지은이3", img: book_case_ex3 },
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
            setShowMenuBottomSheet={setShowMenuBottomSheet}
          />
          <BookCaseComponent
            bookCaseTitle="책장명"
            bookList={bookList}
            setShowMenuBottomSheet={setShowMenuBottomSheet}
          />
          <BookCaseComponent
            bookCaseTitle="내 책장2"
            bookList={bookList}
            setShowMenuBottomSheet={setShowMenuBottomSheet}
          />
          <BookCaseComponent
            bookCaseTitle="책장명"
            bookList={bookList}
            setShowMenuBottomSheet={setShowMenuBottomSheet}
          />
          <BookCaseComponent
            bookCaseTitle="내 책장2"
            bookList={bookList}
            setShowMenuBottomSheet={setShowMenuBottomSheet}
          />
        </div>
        <div className="h-[6rem] bg-transparent"></div>
      </div>
      <BottomNavbar />
      {showMenuBottomSheet && (
        <BottomSheetModal2
          bottomSheetShow={showMenuBottomSheet}
          setBottomSheetShow={setShowMenuBottomSheet}
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
export default BookCasePage;

import BookCaseComponent from "./BookCaseComponent";
import book_case_ex1 from "../../assets/libraryPage/bookcase-ex1.svg";
import book_case_ex2 from "../../assets/libraryPage/bookcase-ex2.svg";
import book_case_ex3 from "../../assets/libraryPage/bookcase-ex3.svg";
import BottomNavbar from "../common/BottomNavbar";

const bookList = [
  { img: book_case_ex1 },
  { img: book_case_ex2 },
  { img: book_case_ex3 },
];

const bookList2 = [];

const BookCasePage = () => {
  return (
    <>
      <div className="h-[44rem] overflow-y-auto ">
        <div className="flex flex-col gap-4 mt-4 mx-4">
          <BookCaseComponent bookCaseTitle="내 책장" bookList={bookList2} />
          <BookCaseComponent bookCaseTitle="책장명" bookList={bookList} />
          <BookCaseComponent bookCaseTitle="내 책장2" bookList={bookList} />
          <BookCaseComponent bookCaseTitle="책장명" bookList={bookList} />
          <BookCaseComponent bookCaseTitle="내 책장2" bookList={bookList} />
        </div>
        <div className="h-[6rem] bg-transparent"></div>
      </div>
      <BottomNavbar />
    </>
  );
};
export default BookCasePage;

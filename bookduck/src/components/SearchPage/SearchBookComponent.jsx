import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookListView from "../common/BookListView";
import Divider1 from "../../components/common/Divider1";
import ButtonComponent from "../common/ButtonComponent";
import BottomSheetModal from "../common/BottomSheetModal";
import ListBottomSheet from "../common/ListBottomSheet";
import { get } from "../../api/example";
const SearchBookComponent = ({ search }) => {
  const navigate = useNavigate();
  const [isCancel, setIsCancel] = useState(false);
  const [bottomSheetShow, setBottomSheetShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [status1, setStatus1] = useState("읽고 싶어요");
  const [status2, setStatus2] = useState("서재에 담기");
  const statusArr = ["읽고 싶어요", "읽고 있어요", "다 읽었어요", "중단했어요"];
  const [registeredBooks, setRegisteredBooks] = useState([]);
  const [books, setBooks] = useState([]);

  //API연결
  //API-등록 책 정보받기
  const getRegisteredBooks = async (keyword, page, size) => {
    try {
      let data = [];
      const response = await get(
        `/bookinfo/search/custom?keyword=${keyword}&page=${page}&size=${size}`
      );
      console.log(response);
      if (response.bookCount > 0) {
        data = response.bookList.map((book) => ({
          id: book.bookinfoId,
          title: book.title,
          author: book.author,
          img: book.imgPath,
          myRating: book.myRating,
          readStatus: book.readStatus,
        }));
      }

      console.log("data", data);
      setRegisteredBooks(data);
      console.log("registeredBooks:", registeredBooks);
    } catch (error) {
      console.error("등록 책 읽어오기 오류", error);
    }
  };

  //API-일반 책 정보받기
  const getBooks = async (keyword, page, size) => {
    try {
      const response = await get(
        `/bookinfo/search?keyword=${keyword}&page=${page}&size=${size}`
      );
      const data = response.bookList.map((book) => ({
        id: book.bookinfoId,
        title: book.title,
        author: book.author,
        img: book.imgPath,
        myRating: book.myRating,
        readStatus: book.readStatus,
      }));
      setBooks(data);
      console.log("books:", books);
    } catch (error) {
      console.error("일반 책 읽어오기 오류", error);
    }
  };

  //useEffect 훅
  useEffect(() => {
    if (search) {
      // getRegisteredBooks(search, 1, 10);
      getBooks(search, 1, 10);
    }
  }, [search]);

  //이벤트 핸들러
  const handleOpenClick1 = () => {
    setIsCancel(false);
    setBottomSheetShow(true);
  };

  const handleOpenClick2 = (inLibary) => {
    setIsCancel(inLibary);
    setBottomSheetShow(true);
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setVisible(false);
    setTimeout(() => {
      setBottomSheetShow(false);
    }, 200);
  };

  return (
    <>
      {registeredBooks.length > 0 || books.length > 0 ? (
        <>
          <div>
            {registeredBooks.length > 0 &&
              registeredBooks.map((book) => (
                <BookListView
                  key={book.id}
                  bookTitle={book.title}
                  author={book.author}
                  bookImg={book.img}
                  register={true}
                  status={status1}
                  edit={true}
                  bottomSheet={true}
                  handleStatusClick={handleOpenClick1}
                />
              ))}
          </div>
          {registeredBooks.length > 0 && books.length > 0 && <Divider1 />}
          <div>
            {books.length > 0 &&
              books.map((book) => (
                <BookListView
                  key={book.bookinfoId}
                  bookTitle={book.title}
                  author={book.author}
                  bookImg={book.img}
                  rating={book.rating}
                  status={status2}
                  edit={true}
                  bottomSheet={true}
                  handleStatusClick={() => handleOpenClick2(book.inLibrary)}
                />
              ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-2 items-center mt-[8.06rem]">
            <span className="text-st text-gray-800 font-semibold">
              {search ? <span>'{search}'</span> : ""}
            </span>
            <span className="text-b1 text-gray-800">
              일치하는 검색 결과가 없어요.
            </span>
            <span className="text-b1 text-gray-500 mb-3">
              책을 직접 등록해보세요!
            </span>
            <ButtonComponent
              text="책 등록하기"
              type="secondary"
              color="orange"
              size="small"
              onClick={() => navigate("/search/register")}
            />
          </div>
        </>
      )}
      <BottomSheetModal
        bottomSheetShow={bottomSheetShow}
        setBottomSheetShow={setBottomSheetShow}
        visible={visible}
        setVisible={setVisible}
      >
        <ListBottomSheet
          title="책 상태"
          options={statusArr}
          currentOption={status1}
          handleOption={handleStatusChange}
          isCancel={isCancel}
        />
      </BottomSheetModal>
    </>
  );
};

export default SearchBookComponent;

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BookListView from "../common/BookListView";
import ButtonComponent from "../common/ButtonComponent";
import BottomSheetModal from "../common/BottomSheetModal";
import Divider1 from "../../components/common/Divider1";
import ListBottomSheet from "../common/ListBottomSheet";
import { get, patch, post, del } from "../../api/example";

const statusArr = ["읽고 싶어요", "읽고 있어요", "다 읽었어요", "중단했어요"];
const DATA_LIMIT = 10;

const SearchBookComponent = ({ search }) => {
  const navigate = useNavigate();
  const [bottomSheetShow, setBottomSheetShow] = useState(false);
  const [visible, setVisible] = useState(false);

  const [selectedBook, setSelectedBook] = useState(null);
  const [registeredBooks, setRegisteredBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [currentState, setCurrentState] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const loaderRef = useRef(null);

  const getReadingStatusKey = (status) => {
    switch (status) {
      case "읽고 싶어요":
        return "NOT_STARTED";
      case "읽고 있어요":
        return "READING";
      case "다 읽었어요":
        return "FINISHED";
      case "중단했어요":
        return "STOPPED";
      default:
        return "NOT_STARTED";
    }
  };

  //API연결
  //API-등록 책 정보받기
  const getRegisteredBooks = async (keyword, page = 0) => {
    setRegisteredBooks([]);
    if (!keyword) return;
    try {
      const response = await get(
        `/bookinfo/search/custom?keyword=${encodeURIComponent(
          keyword
        )}&page=${page}&size=${DATA_LIMIT}`
      );
      console.log("등록 책 response", response);
      const data = response.bookList;
      setRegisteredBooks((b) => [...b, ...data]);
      s;
    } catch (error) {
      console.error("등록 책 읽어오기 오류", error);
    }
  };

  // API-일반 책 받아오기
  const getBooks = async (keyword, page = 0) => {
    setBooks([]);
    if (!keyword) return;
    try {
      const response = await get(
        `/bookinfo/search?keyword=${encodeURIComponent(
          keyword
        )}&page=${page}&size=${DATA_LIMIT}`
      );
      console.log("일반 책 response", response);
      const data = response.bookList;
      setBooks((b) => [...b, ...data]);
      setTotalPages(response.totalPages || 0);
    } catch (error) {
      console.error("책 데이터 불러오기 오류:", error);
    }
  };

  //API-책 상태 변경
  const patchRegisteredStatus = async (option) => {
    try {
      const statusKey = getReadingStatusKey(option);
      await patch(`/books/${selectedBook.userbookId}?status=${statusKey}`);
      console.log(`책 상태 업데이트 성공: ${statusKey}`);
      setSelectedBook(null);
      getRegisteredBooks(search, 0);
      getBooks(search, 0);
      setVisible(false);
      setTimeout(() => {
        setBottomSheetShow(false);
      }, 200);
    } catch (error) {
      console.error("책 상태 변경 업데이트 오류", error);
    }
  };

  //API-서재에 책 등록
  const postBooks = async (option) => {
    const statusKey = getReadingStatusKey(option);
    try {
      const requestBody = {
        title: selectedBook.title,
        author: selectedBook.author,
        imgPath: selectedBook.imgPath,
        readStatus: statusKey,
      };
      await post(`/bookinfo/${selectedBook.providerId}/add`, requestBody);
      console.log(`서재에 도서 추가 완료: ${selectedBook.providerId}`);
      setVisible(false);
      setTimeout(() => {
        setBottomSheetShow(false);
      }, 200);
      setSelectedBook(null);
      getBooks(search, 0);
    } catch (error) {
      console.error("책 등록 업데이트 오류", error);
    }
  };

  const deleteBook = async (userbookId) => {
    try {
      await del(`/books/${userbookId}`);
      setSelectedBook(null);
      getRegisteredBooks(search, 0);
      getBooks(search, 0);
    } catch (error) {
      console.error(error);
    }
  };

  //이벤트 핸들러
  // 등록된 책은 book.userbookId로 받고,
  const handleSelectedBook = (book, isRegistered) => {
    console.log("북덕", book);
    const isLibraryBook = !isRegistered && book.bookUnitDto?.userbookId;
    setSelectedBook({
      bookInfoId: isRegistered
        ? book.bookInfoId
        : isLibraryBook
        ? book.bookUnitDto.bookInfoId
        : null,
      userbookId: isRegistered
        ? book.userbookId
        : isLibraryBook
        ? book.bookUnitDto.userbookId
        : null,
      providerId: isRegistered ? null : book.providerId,
      title: isRegistered ? book.title : book.bookUnitDto.title,
      author: isRegistered ? book.author : book.bookUnitDto.author,
      imgPath: isRegistered ? book.imgPath : book.bookUnitDto.imgPath,
      readStatus: isRegistered ? book.readStatus : book.bookUnitDto.readStatus,
    });

    setBottomSheetShow(true);
  };
  useEffect(() => {
    console.log(selectedBook);
  }, [selectedBook]);

  const handleStatusChange = (option) => {
    if (selectedBook.providerId) {
      /*일반 책인 경우*/
      /*1-미등록: readStatus가 null일 경우*/
      if (selectedBook.readStatus === null) {
        postBooks(option);
      } else {
        patchRegisteredStatus(option);
      }
      /*2-등록: readStatus가 존재할 경우*/
    } else {
      patchRegisteredStatus(option);
    }
  };

  // useEffect 훅
  // 검색어 변경 시 데이터 초기화 및 첫 페이지 호출
  useEffect(() => {
    if (search) {
      setCurrentPage(0);
      getBooks(search, 0);
      getRegisteredBooks(search);
    }
  }, [search]);

  useEffect(() => {
    console.log("registered", registeredBooks);
  }, [registeredBooks]);

  // 무한 스크롤 감지
  useEffect(() => {
    const handleObserver = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && currentPage < totalPages) {
        console.log("다음 페이지 로드");
        setCurrentPage((p) => p + 1);
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null, // viewport 사용
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [currentPage, totalPages]);

  // 현재 페이지 데이터 로드
  useEffect(() => {
    if (currentPage > 0 && search) {
      console.log(`페이지 ${currentPage} 데이터 로드`);
      getBooks(search, currentPage);
    }
  }, [currentPage, search]);

  return (
    <>
      {registeredBooks.length > 0 || books.length > 0 ? (
        <>
          <div>
            {/* 직접 등록한 책 */}
            {registeredBooks.length > 0 &&
              registeredBooks.map((book, index) => (
                <BookListView
                  key={index}
                  bookTitle={book.title}
                  author={book.author}
                  bookImg={book.imgPath}
                  status={book.readStatus}
                  rating={book.myRating}
                  register={true}
                  edit={true}
                  bottomSheet={true}
                  handleStatusClick={() => handleSelectedBook(book, true)}
                />
              ))}
          </div>
          {registeredBooks.length > 0 && books.length > 0 && <Divider1 />}
          {/* 일반 책 */}
          <div>
            {books.length > 0 &&
              books.map((book, index) => (
                <BookListView
                  key={index}
                  bookTitle={book.bookUnitDto.title}
                  author={book.bookUnitDto.author}
                  bookImg={book.bookUnitDto.imgPath}
                  rating={book.bookUnitDto.myRating}
                  status={book.bookUnitDto.readStatus}
                  edit={true}
                  bottomSheet={true}
                  handleStatusClick={() => handleSelectedBook(book, false)}
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
        <div className="p-4">
          <ListBottomSheet
            title="책 상태"
            options={statusArr}
            currentOption={currentState}
            handleOption={handleStatusChange}
            handlePutCancel={deleteBook}
          />
        </div>
      </BottomSheetModal>
    </>
  );
};

export default SearchBookComponent;

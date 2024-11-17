import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BookListView from "../common/BookListView";
import ButtonComponent from "../common/ButtonComponent";
import BottomSheetModal from "../common/BottomSheetModal";
import Divider1 from "../../components/common/Divider1";
import ListBottomSheet from "../common/ListBottomSheet";
import { get, patch } from "../../api/example";

const SearchBookComponent = ({ search }) => {
  const navigate = useNavigate();
  const [bottomSheetShow, setBottomSheetShow] = useState(false);
  const [visible, setVisible] = useState(false);

  const statusArr = ["읽고 싶어요", "읽고 있어요", "다 읽었어요", "중단했어요"];
  const [currentState, setCurrentStatus] = useState();
  const [selectedBookId, setSelectedBookId] = useState();
  const [isCancel, setIsCancel] = useState(false);

  const [registeredBooks, setRegisteredBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const loaderRef = useRef(null);
  const DATA_LIMIT = 10;

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
  const getRegisteredBooks = async (keyword, page = 1) => {
    try {
      const response = await get(
        `/bookinfo/search/custom?keyword=${encodeURIComponent(
          keyword
        )}&page=${page}&size=${DATA_LIMIT}`
      );
      console.log("response", response);
      const data = response.bookList.map((book) => ({
        bookinfoId: book.bookinfoId,
        title: book.title,
        author: book.author,
        imgPath: book.imgPath,
        myRating: book.myRating,
        readStatus: book.readStatus,
      }));
      console.log("data", data);

      setRegisteredBooks((b) => [...b, data]);
      console.log("registeredBooks:", registeredBooks);
    } catch (error) {
      console.error("등록 책 읽어오기 오류", error);
    }
  };
  // API-일반 책 받아오기
  const getBooks = async (keyword, page = 1) => {
    if (!keyword) return;
    try {
      const response = await get(
        `/bookinfo/search?keyword=${encodeURIComponent(
          keyword
        )}&page=${page}&size=${DATA_LIMIT}`
      );
      console.log(response);
      const data = response.bookList.map((book) => ({
        id: book.bookinfoId,
        title: book.title,
        author: book.author,
        img: book.imgPath,
        myRating: book.myRating,
        readStatus: book.readStatus,
      }));

      setBooks((b) => [...b, ...data]);
      setTotalPages(response.totalPages || 1); // 서버에서 전체 페이지 수 반환
    } catch (error) {
      console.error("책 데이터 불러오기 오류:", error);
    }
  };

  //API-직접 등록 책 상태 변경
  const patchRegisteredStatus = async (selectedBookId, currentStatus) => {
    try {
      await patch(`/books/${selectedBookId}?status=${currentStatus}`);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect 훅
  // 검색어 변경 시 데이터 초기화 및 첫 페이지 호출
  useEffect(() => {
    if (search) {
      setBooks([]); // 기존 데이터 초기화
      setCurrentPage(1); // 첫 페이지로 초기화
      getBooks(search, 1);
      setRegisteredBooks([]);
      getRegisteredBooks(search);
    }
  }, [search]);

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
    if (currentPage > 1 && search) {
      console.log(`페이지 ${currentPage} 데이터 로드`);
      getBooks(search, currentPage);
    }
  }, [currentPage, search]);

  //이벤트 핸들러
  const handleStatusClick = (id) => {
    console.log("id", id);
    setSelectedBookId(id);

    console.log("id", selectedBookId);
    setBottomSheetShow(true);
  };

  /*직접 등록 책 처음 등록*/
  const handleStatusRegister = async (status) => {
    setCurrentStatus(status);
    const res = await patchRegisteredStatus(
      selectedBookId,
      getReadingStatusKey(status)
    );
    console.log(res);
    setVisible(false);
    setTimeout(() => {
      setBottomSheetShow(false);
    }, 200);
  };

  /*직접 등록 책 상태 변경*/
  const handleStatusChange = async (status) => {
    setCurrentStatus(status);
    const res = await patchRegisteredStatus(
      selectedBookId,
      getReadingStatusKey(status)
    );
    console.log(res);
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
            {/* 직접 등록한 책 */}
            {registeredBooks.length > 0 &&
              registeredBooks.map((book, index) => (
                <BookListView
                  key={index}
                  bookTitle={book.title}
                  author={book.author}
                  bookImg={book.imgPath}
                  status={book.readStatus}
                  register={true}
                  edit={true}
                  bottomSheet={true}
                  handleStatusClick={() => handleStatusClick(book.bookinfoId)}
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
                  bookTitle={book.title}
                  author={book.author}
                  bookImg={book.img}
                  rating={book.rating}
                  status={currentState}
                  edit={true}
                  bottomSheet={true}
                  handleStatusClick={() => handleStatusClick(book.userBookdId)}
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
            isCancel={isCancel}
          />
        </div>
      </BottomSheetModal>
    </>
  );
};

export default SearchBookComponent;

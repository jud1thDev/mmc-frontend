import React, { useState, useEffect } from "react";
import BookListView from "../common/BookListView";
import Divider1 from "../../components/common/Divider1";
import ButtonComponent from "../common/ButtonComponent";
import { useNavigate } from "react-router-dom";
import BottomSheetModal from "../common/BottomSheetModal";
import check from "../../assets/common/check.svg";
import SBottomSheetComponent from "./SBottomSheetComponent";
const SearchBookComponent = ({ search }) => {
  const [isCancel, setIsCancel] = useState(false);
  const [bottomSheetShow, setBottomSheetShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [status1, setStatus1] = useState("읽고 싶어요");
  const [status2, setStatus2] = useState("서재에 담기");
  const statusArr = ["읽고 싶어요", "읽고 있어요", "다 읽었어요", "중단했어요"];
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

  const navigate = useNavigate();
  const registeredBooks = [
    {
      id: "1",
      title: "고고고",
      author: "마바사",
      inLibrary: true,
    },
    {
      id: "2",
      title: "ㅎㅎㅎ",
      author: "마바사",
      inLibrary: true,
    },
    {
      id: "3",
      title: "범죄수학",
      author: "마바사",
      inLibrary: true,
    },
  ];

  const books = [
    {
      id: "1",
      title: "가나다라",
      author: "마바사",
      inLibrary: true,
    },
    {
      id: "2",
      title: "가나다라",
      author: "마바사",
      inLibrary: false,
    },
    {
      id: "3",
      title: "고고고",
      author: "마바사",
      inLibrary: true,
    },
  ];

  const [registered, setRegistered] = useState([]);
  const [nonRegistered, setNonRegistered] = useState([]);

  useEffect(() => {
    if (search) {
      const filteredRegistered = registeredBooks.filter((registered) =>
        registered.title.includes(search)
      );
      const filteredNonRegistered = books.filter((nonRegistered) =>
        nonRegistered.title.includes(search)
      );
      setRegistered(filteredRegistered);
      setNonRegistered(filteredNonRegistered);
    } else {
      setRegistered([]);
      setNonRegistered([]);
    }
  }, [search]);

  return (
    <>
      {registered.length > 0 || nonRegistered.length > 0 ? (
        <>
          <div>
            {registered.length > 0 &&
              registered.map((book) => (
                <BookListView
                  key={book.id}
                  bookTitle={book.title}
                  author={book.author}
                  register={true}
                  status={status1}
                  edit={true}
                  bottomSheet={true}
                  handleStatusClick={handleOpenClick1}
                />
              ))}
          </div>
          {registered.length > 0 && nonRegistered.length > 0 && <Divider1 />}
          <div>
            {nonRegistered.length > 0 &&
              nonRegistered.map((book) => (
                <BookListView
                  key={book.id}
                  bookTitle={book.title}
                  author={book.author}
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
        <SBottomSheetComponent
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

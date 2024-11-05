import Header1 from "../../components/common/Header1";
import Header3 from "../../components/common/Header3";
import StatusBar from "../../components/common/StatusBar";
import Header from "../../components/RecordingPage/Header";
import ListIcon from "../../components/LibraryPage/ListIcon";
import CoverIcon from "../../components/LibraryPage/CoverIcon";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBookListStore from "../../store/useBookListStore";
import BookListView from "../../components/common/BookListView";
import BookComponent from "../../components/SearchPage/BookComponent";
import ButtonComponent from "../../components/common/ButtonComponent";
import EditBookListView from "../../components/common/EditBookListView";
import add_book_btn from "../../assets/libraryPage/add-book-btn.svg";
import RoundedTabComponent from "../../components/common/roundedTabComponent";

const EnterBookCasePage = () => {
  const { id } = useParams(); // URL에서 id를 추출
  const [isClicked, setIsClicked] = useState("list");
  const { bookList } = useBookListStore();
  const [editState, setEditState] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [addBookState, setAddBookState] = useState(false);
  const [tab, setTab] = useState("");
  const navigate = useNavigate();

  //편집 시 BookListView 클릭 (재클릭하면 클릭 취소)
  const handleItemClick = (index) => {
    setSelectedIndex((prev) =>
      prev.includes(index) ? prev.filter((t) => t !== index) : [...prev, index]
    );
  };

  const handleIconClick = (view) => {
    setIsClicked(view);
  };

  const handleEdit = () => {
    setEditState(!editState);
    setSelectedIndex([]);
  };

  const handleAddBook = () => {
    setAddBookState(true);
  };

  const handleTabClick = (tab) => {
    setTab((prev) =>
      prev.includes(tab) ? prev.filter((t) => t !== tab) : [...prev, tab]
    );
  };

  return (
    <>
      <StatusBar />
      {editState ? (
        <Header3
          title="책장 편집"
          edit={true}
          editState={editState}
          handleEdit={handleEdit}
        />
      ) : addBookState ? (
        <Header3 title="책 추가하기" />
      ) : (
        <Header3
          title=""
          edit={true}
          editState={editState}
          handleEdit={handleEdit}
        />
      )}
      <div className="relative flex flex-col">
        {editState ? (
          <>
            <div className="flex flex-col gap-2 mx-4 mt-4 mb-5">
              <div className="text-c1 text-blue-400">책장 이름</div>
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="책장명"
                className="text-b1 text-gray-800"
              />
            </div>
          </>
        ) : (
          !addBookState && (
            <>
              <Header title="책장명" />
              <div className="absolute right-4 top-4 ">
                <div className="flex gap-2 cursor-pointer">
                  <ListIcon
                    handleClick={handleIconClick}
                    isClicked={isClicked}
                  />
                  <CoverIcon
                    handleClick={handleIconClick}
                    isClicked={isClicked}
                  />
                </div>
              </div>
            </>
          )
        )}
        {bookList.length === 0 ? (
          <div className="mt-[6.62rem] text-b2 text-gray-500 text-center">
            아직 추가된 책이 없어요. <br /> 아래 버튼을 눌러 책을 추가하세요!
          </div>
        ) : (
          <>
            {isClicked === "list" && !editState && !addBookState && (
              <>
                <div className="h-[42rem] mx-4 overflow-y-auto">
                  {bookList &&
                    bookList.map((it, index) => (
                      <div key={index}>
                        <BookListView
                          register={true}
                          bookTitle={it.title}
                          author={it.author}
                          edit={true}
                          bookImg={it.img}
                          handleOnClick={() => {}}
                        />
                      </div>
                    ))}
                </div>
              </>
            )}

            {isClicked === "cover" && !editState && !addBookState && (
              <div className="h-[42rem] mx-4 overflow-y-auto">
                <div className="grid grid-cols-3 place-items-center gap-x-3 gap-y-5">
                  {bookList &&
                    bookList.map((it, index) => (
                      <div key={index}>
                        <BookComponent
                          img={it.img}
                          title={it.title}
                          rating="3"
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}
            {editState && (
              <div className="h-[42rem] overflow-y-auto">
                {bookList &&
                  bookList.map((it, index) => (
                    <div
                      key={index}
                      onClick={() => handleItemClick(index)}
                      className={`${
                        selectedIndex.includes(index) ? "bg-gray-50" : ""
                      }`}
                    >
                      <div className=" mx-4">
                        <EditBookListView
                          bookTitle={it.title}
                          author={it.author}
                          edit={true}
                          addBook={false}
                          bookImg={it.img}
                          isSelected={selectedIndex.includes(index)}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {addBookState && (
              <>
                <div className="m-4">
                  <RoundedTabComponent
                    type="secondary"
                    tabs={[
                      "읽고 싶어요",
                      "읽고 있어요",
                      "다 읽었어요",
                      "중단했어요",
                    ]}
                    activeTabs={tab}
                    onTabClick={handleTabClick}
                    multiple={true}
                  />
                </div>

                <div className="h-[42rem] overflow-y-auto">
                  {bookList &&
                    bookList.map((it, index) => (
                      <div
                        key={index}
                        onClick={() => handleItemClick(index)}
                        className={`${
                          selectedIndex.includes(index) ? "bg-gray-50" : ""
                        }`}
                      >
                        <div className=" mx-4">
                          <EditBookListView
                            bookTitle={it.title}
                            author={it.author}
                            edit={false}
                            addBook={true}
                            bookImg={it.img}
                            isSelected={selectedIndex.includes(index)}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
      {!editState && !addBookState && (
        <div
          onClick={() => handleAddBook(true)}
          className="fixed bottom-[2.63rem] flex justify-end w-[24.5625rem] pr-4 cursor-pointer"
        >
          <img src={add_book_btn} alt="add_book_btn" />
        </div>
      )}
      {(editState || addBookState) && (
        <div className="fixed bottom-0 w-[24.5625rem] h-22 bg-white">
          <div className="flex justify-center mt-[0.38rem] mb-[2.12rem]">
            <ButtonComponent
              text={`${
                addBookState
                  ? `완료 (${selectedIndex.length})`
                  : `삭제 (${selectedIndex.length})`
              }`}
              type="primary"
              disabled={selectedIndex.length === 0}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default EnterBookCasePage;

import { useState } from "react";
import BookInfo from "../../components/BookInfoPage/BookInfo";
import ArchiveView from "../../components/BookInfoPage/ArchiveView";
import FloatingRecordButton from "../../components/common/FloatingRecordButton";
import MyComment from "../../components/BookInfoPage/MyComment";
import Header2 from "../../components/RecordingPage/Header2";
import Header3 from "../../components/common/Header3";
import UserDuck from "../../components/CharacterPage/UserDuck";
// 유저가 직접 추가한 책 정보 페이지
const BookInfoAddedPage = () => {
  const [activeTab, setActiveTab] = useState("기록");
  // api받았을때 isMe가 me이면 내가 등록한 페이지, other이면 타유저가 등록한 페이지
  const isMe = "other";
  return (
    <div className="w-[24.5625rem]">
      {isMe === "me" ? (
        <div>
          <div className="px-4">
            <Header2 />
          </div>
          <div className="flex flex-col mt-2 gap-5">
            <div className="flex flex-col gap-2 px-4">
              <div className="flex flex-col gap-5">
                <BookInfo isMe={isMe} />
                <MyComment />
              </div>
            </div>
            <div>
              <div className="flex items-center text-btn2 px-4 pt-1 h-11 border-b-2 border-gray-50">
                기록
              </div>
              <ArchiveView />
            </div>
            <div className="fixed bottom-[2.625rem] flex justify-end w-[24.5625rem] cursor-pointer">
              <FloatingRecordButton />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Header3 title="" />
          <div className="flex flex-col items-center px-4 mt-4 gap-[7.5rem]">
            <BookInfo isMe={isMe} />
            <div className="w-[13.375rem] h-[13.6875rem]">
              <UserDuck />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default BookInfoAddedPage;

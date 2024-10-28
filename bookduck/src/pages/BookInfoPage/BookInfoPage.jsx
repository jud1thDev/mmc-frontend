import { useState } from "react";
import Header3 from "../../components/common/Header3";
import starNo from "../../assets/bookinfoPage/star-no.svg";
import BookInfo from "../../components/BookInfoPage/BookInfo";
import TabBarComponent from "../../components/common/TabBarComponent";
import InfoView from "../../components/BookInfoPage/InfoView";
import ArchiveView from "../../components/BookInfoPage/ArchiveView";
import FloatingRecordButton from "../../components/RecordingPage/FloatingRecordButton";
const BookInfoPage = () => {
  const [activeTab, setActiveTab] = useState("책 정보");
  return (
    <div className="w-[24.5625rem]">
      <Header3 title="" />
      <div className="flex flex-col mt-2 gap-5">
        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-col gap-5">
            <BookInfo />
            <div className="flex flex-col items-center px-4 pt-4 pb-5 gap-2 bg-gray-10 w-[361px] rounded-lg">
              <div className="flex items-center gap-1">
                <img src={starNo} />
                <img src={starNo} />
                <img src={starNo} />
                <img src={starNo} />
                <img src={starNo} />
              </div>
              <div className="px-1 py-2 text-b2 text-gray-400 border-b border-[#DDDDDD] w-full">
                책에 대한 나의 한줄 평을 작성해주세요!
              </div>
            </div>
          </div>
          <TabBarComponent
            tabs={["책 정보", "기록"]}
            activeTab={activeTab}
            onTabClick={setActiveTab}
            size=""
          />
        </div>
        {activeTab === "책 정보" && <InfoView />}
        {activeTab === "기록" && <ArchiveView />}
        <FloatingRecordButton />
      </div>
    </div>
  );
};
export default BookInfoPage;

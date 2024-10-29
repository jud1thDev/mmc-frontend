import { useState } from "react";
import Header3 from "../../components/common/Header3";
import BookInfo from "../../components/BookInfoPage/BookInfo";
import TabBarComponent from "../../components/common/TabBarComponent";
import InfoView from "../../components/BookInfoPage/InfoView";
import ArchiveView from "../../components/BookInfoPage/ArchiveView";
import FloatingRecordButton from "../../components/common/FloatingRecordButton";
import MyComment from "../../components/BookInfoPage/MyComment";
const BookInfoPage = () => {
  const [activeTab, setActiveTab] = useState("책 정보");
  return (
    <div className="w-[24.5625rem]">
      <Header3 title="" />
      <div className="flex flex-col mt-2 gap-5">
        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-col gap-5">
            <BookInfo />
            <MyComment />
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
        <div className="fixed bottom-[2.625rem] flex justify-end w-[24.5625rem] cursor-pointer">
          <FloatingRecordButton />
        </div>
      </div>
    </div>
  );
};
export default BookInfoPage;

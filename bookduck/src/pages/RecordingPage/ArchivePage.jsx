import { useState } from "react";
import BottomNavbar from "../../components/common/BottomNavbar";
import MenuBar from "../../components/common/menuBar";
import ExtractComponents from "../../components/common/RecordingPage/ExtractComponents";
import FloatingRecordButton from "../../components/common/RecordingPage/FloatingRecordButton";
import Header from "../../components/common/RecordingPage/Header";
import ReviewComponents from "../../components/common/RecordingPage/ReviewComponents";
import TotalView from "../../components/common/RecordingPage/TotalView";
import TabBarComponent from "../../components/TabBarComponent";
import ExtractView from "../../components/common/RecordingPage/ExtractView";
import ReviewView from "../../components/common/RecordingPage/ReviewView";

const ArchivePage = () => {
  const [tab, setTab] = useState("전체보기");
  const handleTab = (index) => {
    setTab(index);
  };

  return (
    <>
      <div className="flex flex-col h-[53.25rem] ">
        <Header title="기록 아카이브" />

        <TabBarComponent
          tabs={["전체보기", "발췌", "감상평"]}
          activeTab={tab}
          onTabClick={setTab}
          size="small"
          borderWidth="3rem"
        />
        {tab === "전체보기" && <TotalView />}
        {tab === "발췌" && <ExtractView />}
        {tab === "감상평" && <ReviewView />}

        <FloatingRecordButton />
        <BottomNavbar />
      </div>
    </>
  );
};
export default ArchivePage;

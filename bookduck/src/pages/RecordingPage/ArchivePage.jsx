import { useState } from "react";
import BottomNavbar from "../../components/common/BottomNavbar";
import FloatingRecordButton from "../../components/RecordingPage/FloatingRecordButton";
import Header from "../../components/RecordingPage/Header";

import TotalView from "../../components/RecordingPage/TotalView";
import TabBarComponent from "../../components/common/TabBarComponent";
import ExtractView from "../../components/RecordingPage/ExtractView";
import ReviewView from "../../components/RecordingPage/ReviewView";
import StatusBar from "../../components/common/StatusBar";

const ArchivePage = () => {
  const [tab, setTab] = useState("전체보기");
  const handleTab = (index) => {
    setTab(index);
  };

  return (
    <>
      <StatusBar />
      <div className="flex flex-col">
        <Header title="기록 아카이브" />
        <TabBarComponent
          tabs={["전체보기", "발췌", "감상평"]}
          activeTab={tab}
          onTabClick={setTab}
          size="small"
          borderWidth="3rem"
        />
        <div className="h-[33rem] overflow-y-auto">
          {tab === "전체보기" && <TotalView />}
          {tab === "발췌" && <ExtractView />}
          {tab === "감상평" && <ReviewView />}
        </div>
        <FloatingRecordButton />
        <BottomNavbar />
      </div>
    </>
  );
};
export default ArchivePage;

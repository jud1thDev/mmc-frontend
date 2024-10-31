import { useState } from "react";
import StatusBar from "../../components/common/StatusBar";
import TabBarComponent from "../../components/common/TabBarComponent";
import BookListPage from "./BookListPage";
import BookCasePage from "./BookCasePage";
import Header from "../../components/RecordingPage/Header";

const LibraryPage = () => {
  const [tab, setTab] = useState("책 목록");
  return (
    <>
      <StatusBar />
      <div className="flex flex-col">
        <Header title="서재" />
        <TabBarComponent
          tabs={["책 목록", "책장"]}
          activeTab={tab}
          onTabClick={setTab}
          size="small"
          borderWidth="3rem"
        />
        <div className="h-[33rem] overflow-y-auto">
          {tab === "책 목록" && <BookListPage />}
          {tab === "책장" && <BookCasePage />}
        </div>
      </div>
    </>
  );
};
export default LibraryPage;

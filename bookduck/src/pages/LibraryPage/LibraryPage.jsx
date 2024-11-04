import { useState } from "react";
import StatusBar from "../../components/common/StatusBar";
import TabBarComponent from "../../components/common/TabBarComponent";
import BookListPage from "../../components/LibraryPage/BookListPage";
import BookCasePage from "../../components/LibraryPage/BookCasePage";
import Header from "../../components/RecordingPage/Header";
import ListIcon from "../../components/LibraryPage/ListIcon";
import CoverIcon from "../../components/LibraryPage/CoverIcon";

const LibraryPage = () => {
  const [tab, setTab] = useState("책 목록");
  const [isClicked, setIsClicked] = useState("list");
  const handleIconClick = (view) => {
    setIsClicked(view);
  };
  return (
    <>
      <StatusBar />
      <div className="relative flex flex-col ">
        <Header title="서재" />
        <TabBarComponent
          tabs={["책 목록", "책장"]}
          activeTab={tab}
          onTabClick={setTab}
          size="small"
          borderWidth="3rem"
        />
        <div className="absolute right-0 top-[3.8rem] right-[0.63rem]">
          <div className="flex gap-2 cursor-pointer">
            <ListIcon handleClick={handleIconClick} isClicked={isClicked} />
            <CoverIcon handleClick={handleIconClick} isClicked={isClicked} />
          </div>
        </div>
        <div>
          {tab === "책 목록" && <BookListPage view={isClicked} />}
          {tab === "책장" && <BookCasePage />}
        </div>
      </div>
    </>
  );
};
export default LibraryPage;

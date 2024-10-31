import { useState } from "react";
import StatusBar from "../../components/common/StatusBar";
import SearchComponent from "../../components/common/SearchComponent";
import TabBarComponent from "../../components/common/TabBarComponent";
import BookListView from "../../components/common/BookListView";
import Divider1 from "../../components/common/Divider1";
const SearchBookPage = () => {
  const [tab, setTab] = useState("책");
  const [search, setSearch] = useState("");
  return (
    <div className="w-[24.5625rem]">
      <StatusBar />
      <SearchComponent search={search} setSearch={setSearch} />
      <div className="flex flex-col gap-2">
        <TabBarComponent
          tabs={["책", "기록", "사용자"]}
          activeTab={tab}
          onTabClick={setTab}
          size="small"
        />
        <div>
          <BookListView />
          <BookListView />
        </div>
        <Divider1 />
        <div>
          <BookListView register={false} />
          <BookListView register={false} />
          <BookListView register={false} />
          <BookListView register={false} />
        </div>
      </div>
    </div>
  );
};

export default SearchBookPage;

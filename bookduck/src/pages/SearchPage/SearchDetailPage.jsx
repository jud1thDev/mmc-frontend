import { useState } from "react";
import StatusBar from "../../components/common/StatusBar";
import SearchComponent from "../../components/common/SearchComponent";
import TabBarComponent from "../../components/common/TabBarComponent";

import SearchBookComponent from "../../components/SearchPage/SearchBookComponent";
import SearchArchiveComponent from "../../components/SearchPage/SearchArchiveComponent";
import SearchUserComponent from "../../components/SearchPage/SearchUserComponent";
const SearchDetailPage = () => {
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
        {tab === "책" && (
          <SearchBookComponent search={search} setSearch={setSearch} />
        )}
        {tab === "기록" && (
          <SearchArchiveComponent search={search} setSearch={setSearch} />
        )}
        {tab === "사용자" && (
          <SearchUserComponent search={search} setSearch={setSearch} />
        )}
      </div>
    </div>
  );
};

export default SearchDetailPage;

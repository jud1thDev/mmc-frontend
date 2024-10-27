import { useState, useEffect } from "react";
import StatusBar from "../../components/common/StatusBar";
import SearchComponent from "../../components/common/SearchComponent";
import TabBarComponent from "../../components/common/TabBarComponent";
import downArrow from "../../assets/common/down-arrow.svg";
import ReviewComponent from "../../components/SearchPage/ReviewComponent";
import BottomSheetModal from "../../components/common/BottomSheetModal";
import check from "../../assets/common/check.svg";
const SearchArchivePage = () => {
  const [search, setSearch] = useState("");
  const [allArchives] = [
    { id: "1", date: "2024.01.01", isPublic: true, content: "콩국수" },
    { id: "2", date: "2024.01.01", isPublic: true, content: "짜장면" },
    { id: "3", date: "2024.01.01", isPublic: true, content: "전복" },
  ];
  const [results, setResults] = useState(allArchives);

  const [tab, setTab] = useState("기록");
  const [sort, setSort] = useState("정확도순");
  const [bottomSheetShow, setBottomSheetShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (search) {
      const filteredResult = allArchives.filter((archive) =>
        archive.content.includes(search)
      );
      setResults(filteredResult);
    } else {
      setResults(allArchives);
    }
  }, [search]);

  const handleClick = () => {
    setBottomSheetShow(true);
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
    setVisible(false);
    setTimeout(() => {
      setBottomSheetShow(false);
    }, 200);
  };

  return (
    <>
      <div className="w-[24.5625rem]">
        <StatusBar />
        <SearchComponent search={search} setSearch={setSearch} />
        <TabBarComponent
          tabs={["책", "기록", "사용자"]}
          activeTab={tab}
          onTabClick={setTab}
          size="small"
        />
        <div className="flex justify-between px-4 pt-3">
          <div className="text-b2">
            7<span className=" text-gray-500">개</span>
          </div>
          <button
            className="flex flex-row text-b2 text-gray-500"
            onClick={handleClick}
          >
            <span>{sort}</span>
            <img src={downArrow} alt="downArrow" />
          </button>
        </div>
        <div>
          {results.length > 0 ? (
            results.map((result) => {
              return (
                <ReviewComponent
                  key={result.id}
                  date={result.date}
                  isPublic={result.isPublic}
                  content={result.content}
                />
              );
            })
          ) : (
            <div>결과없음</div>
          )}
        </div>
      </div>
      <BottomSheetModal
        bottomSheetShow={bottomSheetShow}
        setBottomSheetShow={setBottomSheetShow}
        visible={visible}
        setVisible={setVisible}
      >
        <div className="flex flex-col">
          <div
            className="flex flex-row justify-between items-center w-[22.5625rem] h-[3rem]"
            onClick={() => handleSortChange("정확도순")}
          >
            <span>정확도순</span>
            {sort === "정확도순" && <img src={check} alt="check-icon" />}
          </div>
          <div
            className="flex flex-row justify-between items-center w-[22.5625rem] h-[3rem]"
            onClick={() => handleSortChange("최신순")}
          >
            <span>최신순</span>
            {sort === "최신순" && <img src={check} alt="check-icon" />}
          </div>
        </div>
      </BottomSheetModal>
    </>
  );
};

export default SearchArchivePage;

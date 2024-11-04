import React, { useState, useEffect } from "react";
import ReviewComponent from "./ReviewComponent";
import BottomSheetModal from "../common/BottomSheetModal";
import ListBottomSheet from "../common/ListBottomSheet";
import downArrow from "../../assets/common/down-arrow.svg";

const SearchArchiveComponent = ({ search }) => {
  const sortingArr = ["정확도순", "최신순"];
  const allArchives = [
    {
      id: "1",
      date: "2024.01.01",
      isPublic: true,
      content:
        "한번 피면 끝장을 검색어 보게 되는 책이다. 중간에 덮을 수가 없다. 어떤 지점에서 골이 띵할 정도의 과격한 유턴을 하게 되는데, 한번 피면 끝장을 검색어 보게 되는 책이다. 중간에 덮을 수가 없다. 어떤 지점에서 골이 띵할 정도의 과격한 유턴을 하게 되는데 그...",
    },
    {
      id: "2",
      date: "2024.01.01",
      isPublic: false,
      content:
        "한번 피면 끝장을 검색어 보게 되는 책이다. 중간에 덮을 수가 없다. 어떤 지점에서 골이 띵할 정도의 과격한 유턴을 하게 되는데, 한번 피면 끝장을 검색어 보게 되는 책이다. 중간에 덮을 수가 없다. 어떤 지점에서 골이 띵할 정도의 과격한 유턴을 하게 되는데 그...",
    },
    { id: "3", date: "2024.01.01", isPublic: true, content: "전복" },
    { id: "4", date: "2024.01.01", isPublic: true, content: "전복" },
  ];
  const [results, setResults] = useState(allArchives);
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
      setResults([]);
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
      <div className="flex justify-between px-4 pt-3">
        <div className="text-b2">
          {results.length}
          <span className=" text-gray-500">개</span>
        </div>
        <button
          className="flex flex-row text-b2 text-gray-500"
          onClick={handleClick}
        >
          <div className="flex items-center">
            <span>{sort}</span>
            <img src={downArrow} alt="downArrow" />
          </div>
        </button>
      </div>
      <div className="px-4">
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
          <div className="flex flex-col items-center mt-[8.06rem]">
            <span className="text-st text-gray-800 font-semibold">
              {search ? <span>'{search}'</span> : ""}
            </span>
            <span className="text-b1 text-gray-800">
              일치하는 검색 결과가 없어요.
            </span>
          </div>
        )}
      </div>
      <BottomSheetModal
        bottomSheetShow={bottomSheetShow}
        setBottomSheetShow={setBottomSheetShow}
        visible={visible}
        setVisible={setVisible}
      >
        <ListBottomSheet
          options={sortingArr}
          currentOption={sort}
          handleOption={handleSortChange}
        />
      </BottomSheetModal>
    </>
  );
};

export default SearchArchiveComponent;

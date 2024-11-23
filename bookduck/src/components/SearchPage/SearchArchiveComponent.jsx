import React, { useState, useEffect, useRef } from "react";
import ReviewComponent from "./ReviewComponent";
import BottomSheetModal from "../common/BottomSheetModal";
import ListBottomSheet from "../common/ListBottomSheet";
import downArrow from "../../assets/common/down-arrow.svg";
import { get } from "../../api/example";
import ExcerptComponent from "./ExcerptComponent";

const sortingArr = ["정확도순", "최신순"];
const DATA_LIMIT = 10;
const getSortKey = (sort) => {
  switch (sort) {
    case "정확도순":
      return "accuracy";
    case "최신순":
      return "latest";
    default:
      return "Error";
  }
};
const SearchArchiveComponent = ({ search }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [archives, setArchives] = useState([]);
  const [sort, setSort] = useState("정확도순");
  const [bottomSheetShow, setBottomSheetShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const loaderRef = useRef(null);

  const getArchives = async (search, page) => {
    if (!search) return setArchives([]);
    try {
      const response = await get(
        `/archives/search?page=${page}&size=${DATA_LIMIT}&keyword=${encodeURIComponent(
          search
        )}&orderBy=accuracy`
      );
      console.log("response", response);

      // 중복 제거 및 상태 업데이트
      setArchives((preArchives) => {
        return page === 0
          ? response.archiveList
          : [...preArchives, ...response.archiveList];
      });

      setTotalPages(response.totalPages || 1);
    } catch (error) {
      console.error("기록 읽어오기 오류", error);
    }
  };

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

  useEffect(() => {
    setArchives([]);
    console.log("기록 search", search);
    getArchives(search, 0);
    setCurrentPage(0);
  }, [search]);

  // 무한 스크롤 감지
  useEffect(() => {
    const handleObserver = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && currentPage < totalPages - 1 && !isLoading) {
        console.log("다음 페이지 로드!");
        setCurrentPage((prev) => prev + 1);
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [currentPage, totalPages]);

  // 현재 페이지 변경 시 데이터 요청
  useEffect(() => {
    if (search && currentPage >= 0) {
      console.log(`페이지 ${currentPage} 데이터 로드`);
      getArchives(search, currentPage);
    }
  }, [currentPage, search, sort]);

  return (
    <>
      <div className="flex justify-between px-4 pt-3">
        <div className="text-b2">
          {archives.length}
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
        {archives.length > 0 ? (
          archives.map((archive, index) => {
            if (archive.type === "REVIEW") {
              return (
                <ReviewComponent
                  key={index}
                  createdTime={archive.data.createdTime}
                  title={archive.data.reviewTitle}
                  content={archive.data.reviewContent}
                />
              );
            } else {
              return (
                <ExcerptComponent
                  key={index}
                  createdTime={archive.data.createdTime}
                  visibility={archive.data.visibility}
                  content={archive.data.excerptContent}
                />
              );
            }
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
        <div ref={loaderRef} style={{ height: "1px" }} />
      </div>
      <BottomSheetModal
        bottomSheetShow={bottomSheetShow}
        setBottomSheetShow={setBottomSheetShow}
        visible={visible}
        setVisible={setVisible}
      >
        <div className="p-4">
          <ListBottomSheet
            options={sortingArr}
            currentOption={sort}
            handleOption={handleSortChange}
          />
        </div>
      </BottomSheetModal>
    </>
  );
};

export default SearchArchiveComponent;

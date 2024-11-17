import React, { useState, useEffect, useRef } from "react";
import { get } from "../../api/example";
import StatusBar from "../../components/common/StatusBar";
import Header3 from "../../components/common/Header3";
import SearchComponent from "../../components/common/SearchComponent";
import ExtractCard from "../../components/MainPage/ExtractCard";
import ButtonComponent from "../../components/common/ButtonComponent";

const SelectExtractPage = () => {
  //상태 관리
  const [search, setSearch] = useState("");
  const [excerpts, setExcerpts] = useState([]);
  const [excerptId, setExcerptId] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const loaderRef = useRef(null);
  const DATA_LIMIT = 10;
  //API 연결
  //리스트 책 받아오기
  const getExcerpts = async (keyword, page = 1) => {
    try {
      const response = await get(
        `/readingspace/excerpts/search?keyword=${keyword}&page=${page}&size=${DATA_LIMIT}`
      );

      console.log("response", response);
      const data = response.excerptList.map((excerpt) => ({
        visibility: excerpt.visibility,
        pageNumber: excerpt.pageNumber,
        excerptContext: excerpt.excerptContext,
      }));
      console.log("data", data);
      setExcerpts((e) => [...e, data]);
      setTotalPages(response.totalPages || 1); // 서버에서 전체 페이지 수 반환
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect 훅
  // 검색어 변경 시 데이터 초기화 및 첫 페이지 호출

  useEffect(() => {
    getExcerpts();
  }, []);

  useEffect(() => {
    if (search) {
      setExcerpts([]); // 기존 데이터 초기화
      setCurrentPage(1); // 첫 페이지로 초기화
      getExcerpts(search, 1);
    }
  }, [search]);

  // 무한 스크롤 감지
  useEffect(() => {
    const handleObserver = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && currentPage < totalPages) {
        console.log("다음 페이지 로드");
        setCurrentPage((p) => p + 1);
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null, // viewport 사용
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [currentPage, totalPages]);

  // 현재 페이지 데이터 로드
  useEffect(() => {
    if (currentPage > 1 && search) {
      console.log(`페이지 ${currentPage} 데이터 로드`);
      getBooks(search, currentPage);
    }
  }, [currentPage, search]);

  //이벤트 핸들러
  const handleSelectCard = (id) => {
    setSelectedCard(id);
  };

  return (
    <div className="w-[24.5625rem]">
      <StatusBar />
      <Header3 title="발췌 카드 선택" />
      <div className="mt-[0.62rem] mb-4">
        <SearchComponent
          placeholder="기록한 발췌 카드를 검색하세요"
          search={search}
          setSearch={setSearch}
        />
      </div>
      <div className="flex flex-col gap-4 px-5">
        {excerpts.totalElements > 0 &&
          excerpts.map((excerpt, index) => (
            <ExtractCard
              key={index}
              onClick={() => handleSelectCard(excerpt.excerptId)}
              selected={excerptId === excerpt.excerptId ? true : false}
              excerptContext={excerpt.excerptContext}
              visibility={excerpt.visibility}
              pageNumber={excerpt.pageNumber}
            />
          ))}
      </div>
      {excerptId && (
        <div className="fixed bottom-0 w-[24.5625rem] h-[5.5rem] px-4 pt-[0.37rem] bg-white">
          <ButtonComponent text="완료" type="primary" disabled={!excerptId} />
        </div>
      )}
    </div>
  );
};

export default SelectExtractPage;

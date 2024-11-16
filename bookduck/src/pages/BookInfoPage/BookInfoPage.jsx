import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header3 from "../../components/common/Header3";
import BookInfo from "../../components/BookInfoPage/BookInfo";
import TabBarComponent from "../../components/common/TabBarComponent";
import InfoView from "../../components/BookInfoPage/InfoView";
import ArchiveView from "../../components/BookInfoPage/ArchiveView";
import FloatingRecordButton from "../../components/common/FloatingRecordButton";
import MyComment from "../../components/BookInfoPage/MyComment";
import { getBookInfo, getOneLineRatingsInfo } from "../../api/bookinfo";

const BookInfoPage = () => {
  const { bookinfoId } = useParams();
  const [activeTab, setActiveTab] = useState("책 정보");
  // const [RatingListData, setRatingListData] = useState(null);
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBookInfo({ bookinfoId });
        // const res2 = await getOneLineRatingsInfo({ bookinfoId });
        console.log("조회성공: ", res);
        // setRatingListData(res);
        setBookData(res);
      } catch (err) {
        console.error("오류 발생: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-[24.5625rem]">
      <Header3 title="" />
      <div className="flex flex-col mt-2 gap-5">
        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-col gap-5">
            <BookInfo bookData={bookData} />
            <MyComment bookData={bookData} />
          </div>
          <TabBarComponent
            tabs={["책 정보", "기록"]}
            activeTab={activeTab}
            onTabClick={setActiveTab}
            size=""
          />
        </div>
        {activeTab === "책 정보" && (
          <InfoView bookData={bookData?.bookInfoDetailDto} />
        )}
        {activeTab === "기록" && <ArchiveView />}
        <div className="fixed bottom-[2.625rem] flex justify-end w-[24.5625rem] cursor-pointer">
          <FloatingRecordButton />
        </div>
      </div>
    </div>
  );
};
export default BookInfoPage;

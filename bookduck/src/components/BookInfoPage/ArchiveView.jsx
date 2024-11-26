import { useState, useEffect } from "react";
import { getMyArchive } from "../../api/bookinfo";
import ReviewComponents from "../../components/RecordingPage/ReviewComponents";
import ExtractComponents from "../../components/RecordingPage/ExtractComponents";
const ArchiveView = ({ bookinfoId }) => {
  const [myArchiveData, setMyArchiveData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMyArchive({ bookinfoId });
        console.log("조회 성공: ", res);
        setMyArchiveData(res.userBookArchiveList);
      } catch (err) {
        console.error("오류 발생: ", err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      {myArchiveData?.length > 0 ? (
        <div className="flex flex-col gap-4">
          {myArchiveData.map((item, index) => {
            const { type, data } = item;
            if (type === "REVIEW") {
              return <ReviewComponents key={index} reviewData={data} />;
            } else if (type === "EXCERPT") {
              return <ExtractComponents key={index} excerptData={data} />;
            }
          })}
        </div>
      ) : (
        <div className="flex justify-center mt-[3.25rem] text-b2 text-gray-400">
          아직 작성된 독서기록이 없어요. <br />
          ‘독서 기록하기’ 버튼을 눌러 책 구절을 <br />
          발췌하거나 감상평을 기록해 보세요!
        </div>
      )}
    </div>
  );
};
export default ArchiveView;

import { useNavigate } from "react-router-dom";
import { getDetailExtractReview } from "../../api/archive";

const ExtractComponents = ({ excerptData, archive = false, font }) => {
  const navigate = useNavigate();

  // 데이터 유효성 체크
  if (!excerptData || !excerptData.data || !excerptData.data.excerptContent) {
    // 데이터가 없으면 아무것도 렌더링하지 않음
    return null;
  }

  const createdDate = excerptData?.data?.createdTime
    ?.split("T")[0]
    ?.replace(/-/g, ".");
  const archiveId = excerptData.archiveId || "";
  const title = excerptData?.title || "";
  const author = excerptData?.author || "";
  const content = excerptData?.data?.excerptContent || "";
  const page = excerptData?.data?.pageNumber || "";

  const handleOnClick = async () => {
    try {
      const res = await getDetailExtractReview(archiveId);
      const typeState =
        res.excerpt && res.review ? "ALL" : res.excerpt ? "EXCERPT" : "REVIEW";

      if (typeState === "ALL") {
        navigate(`/total-archive-detail/${archiveId}`, {
          state: { detailData: res },
        });
      } else if (typeState === "EXCERPT") {
        navigate(`/excerpt-archive-detail/${archiveId}`, {
          state: { detailData: res },
        });
      }
    } catch (error) {
      console.error("Failed to fetch detail:", error);
    }
  };

  return (
    <div onClick={handleOnClick} className="cursor-pointer">
      <div className="flex flex-col gap-[1.25rem] w-[22.5625rem] p-[1.25rem] rounded-[0.875rem] bg-gray-10 shadow-custom">
        {!archive && createdDate ? (
          <div className="flex justify-between items-center">
            <div className={`text-c2 text-gray-400 ${font}`}>{createdDate}</div>
            <div
              className={`text-right justify-end items-end text-b2 text-gray-400 ${font}`}
            >
              {excerptData?.pageNumber || ""}
            </div>
          </div>
        ) : (
          <>
            <div className={`text-right text-b2 text-gray-400 ${font}`}>
              {page}
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <div className={`text-b2 text-gray-800 ${font}`}>{content}</div>
              <div className={`${font} text-c2 text-gray-400`}>
                {title && author ? `${title} / ${author}` : ""}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExtractComponents;

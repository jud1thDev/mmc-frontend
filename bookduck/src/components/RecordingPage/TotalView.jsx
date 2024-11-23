import { useQuery } from "@tanstack/react-query";
import ExtractComponents from "./ExtractComponents";
import ReviewComponents from "./ReviewComponents";
import { getExtractReview } from "../../api/archive";
import { getUserId } from "../../api/oauth";

const TotalView = () => {
  const userId = getUserId();
  const {
    data: archiveData,
    isError,
    error,
  } = useQuery({
    queryKey: ["archiveData"],
    queryFn: () => getExtractReview(userId, "ALL", 0, 20),
  });

  return (
    <div className="flex flex-col gap-[1rem] items-center max-h-[40rem]  mt-[1rem] overflow-y-auto">
      {archiveData.archiveList.map((it, index) => (
        <>
          {it.type === "EXCERPT" ? (
            <ExtractComponents
              key={index}
              page={it.data.pageNumber}
              content={it.data.excerptContent}
              excerptId={it.data.excerptId}
              title={it.title}
              author={it.author}
            />
          ) : (
            <ReviewComponents
              key={index}
              page={it.data.pageNumber}
              content={it.data.reviewContent}
              reviewId={it.data.reviewId}
              reviewTitle={it.data.reviewTitle}
              title={it.title}
              author={it.author}
            />
          )}
        </>
      ))}
    </div>
  );
};
export default TotalView;

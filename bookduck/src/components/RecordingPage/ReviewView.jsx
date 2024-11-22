import { useQuery } from "@tanstack/react-query";
import { getExtractReview } from "../../api/archive";
import { getUserId } from "../../api/oauth";
import ReviewComponents from "./ReviewComponents";

const ReviewView = () => {
  const userId = getUserId();
  const {
    data: archiveReviewData,
    isError,
    error,
  } = useQuery({
    queryKey: ["archiveReviewData"],
    queryFn: () => getExtractReview(userId, "REVIEW", 0, 20),
  });
  return (
    <div className="flex flex-col gap-[1rem] items-center h-[40rem]  mt-[1rem] overflow-y-auto">
      {archiveReviewData.archiveList.map((it, index) => (
        <ReviewComponents
          key={index}
          page={it.data.pageNumber}
          content={it.data.reviewContent}
          reviewId={it.data.reviewId}
          reviewTitle={it.data.reviewTitle}
          title={it.title}
          author={it.author}
        />
      ))}
    </div>
  );
};
export default ReviewView;

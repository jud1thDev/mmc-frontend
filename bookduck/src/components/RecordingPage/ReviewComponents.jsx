import { useNavigate } from "react-router-dom";
import useReviewColorStore from "../../store/useReviewColorStore";
import { useEffect } from "react";
import { getUserId } from "../../api/oauth";
import { getDetailExtractReview } from "../../api/archive";

const ReviewComponents = ({
  page,
  content,
  reviewId,
  reviewTitle,
  title,
  author,
}) => {
  const navigate = useNavigate();
  const { reviewColor } = useReviewColorStore();

  const handleOnClick = async () => {
    const res = await getDetailExtractReview(reviewId, "REVIEW");
    const typeState =
      res.excerpt && res.review ? "ALL" : res.excerpt ? "EXCERPT" : "REVIEW";

    if (typeState === "ALL")
      navigate(`/total-archive-detail/${reviewId}`, {
        state: { detailData: res },
      });
    if (typeState === "REVIEW")
      navigate(`/review-archive-detail/${reviewId}`, {
        state: { detailData: res },
      });
  };

  return (
    <div onClick={handleOnClick} className="cursor-pointer ">
      <div
        style={{ backgroundColor: reviewColor }}
        className={`flex flex-col gap-[1.75rem] w-[22.5625rem]  p-[1.25rem] rounded-[0.88rem] ${
          !reviewColor && "bg-gray-400"
        } shadow-custom`}
      >
        <div className="flex flex-col gap-[0.25rem]">
          <div className="text-st text-[#FFFFFF] font-semibold">
            {reviewTitle}
          </div>
          <div className="text-b2 text-[#FFFFFF]">{content}</div>
        </div>
        <div className="text-c2 text-[#ffffff99]">
          {title} / {author}
        </div>
      </div>
    </div>
  );
};
export default ReviewComponents;

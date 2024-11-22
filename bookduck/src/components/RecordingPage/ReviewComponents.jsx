import { useNavigate } from "react-router-dom";
import useReviewColorStore from "../../store/useReviewColorStore";
import { useEffect } from "react";

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

  return (
    <div
      onClick={() => navigate("/review-archive-detail")}
      className="cursor-pointer "
    >
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

import { useNavigate } from "react-router-dom";
import useReviewColorStore from "../../store/useReviewColorStore";
import { useEffect } from "react";

const ReviewComponents = ({
  reviewTitleValue = "감상평 제목",
  contents = "감상평 내용이 들어갈 자리입니다.",
  bookTitleValue,
  authorValue,
  reviewData,
}) => {
  const createdDate = reviewData?.createdTime.split("T")[0].replace(/-/g, ".");
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
        {createdDate && (
          <div className="text-c2 text-[#ffffff99]">{createdDate}</div>
        )}
        <div className="flex flex-col gap-[0.25rem]">
          <div className="text-st text-[#FFFFFF] font-semibold">
            {reviewData?.reviewTitle || reviewTitleValue}
          </div>
          <div className="text-b2 text-[#FFFFFF]">
            {reviewData?.reviewContent || contents}
          </div>
        </div>
        {bookTitleValue && (
          <div className="text-c2 text-[#ffffff99]">
            {bookTitleValue} / {authorValue}
          </div>
        )}
      </div>
    </div>
  );
};
export default ReviewComponents;

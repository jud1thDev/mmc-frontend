import { useNavigate } from "react-router-dom";

const ReviewComponents = ({
  reviewTitleValue,
  contents,
  bookTitleValue,
  authorValue,
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/review-archive-detail")}
      className="cursor-pointer "
    >
      <div className="flex flex-col gap-[1.75rem] w-[22.5625rem]  p-[1.25rem] rounded-[0.88rem] bg-gray-400 shadow-custom">
        <div className="flex flex-col gap-[0.25rem]">
          <div className="text-st text-[#FFFFFF] font-semibold">
            {reviewTitleValue}
          </div>
          <div className="text-b2 text-[#FFFFFF]">{contents}</div>
        </div>
        <div className="text-c2 text-[#ffffff99]">
          {bookTitleValue} / {authorValue}
        </div>
      </div>
    </div>
  );
};
export default ReviewComponents;

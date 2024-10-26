import { useNavigate } from "react-router-dom";

const ReviewComponents = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/review-archive-detail")}
      className="cursor-pointer"
    >
      <div className="flex flex-col gap-[1.75rem] w-[22.5625rem]  p-[1.25rem] rounded-[0.88rem] bg-gray-400">
        <div className="flex flex-col gap-[0.25rem]">
          <div className="text-st text-[#FFFFFF] font-semibold">
            걸작. 몇년간 읽은 책중 최고다.
          </div>
          <div className="text-b2 text-[#FFFFFF]">
            한번 피면 끝장을 보게 되는 책이다.
          </div>
        </div>
        <div className="text-c2 text-[#FFFFFF]">
          내 편이 아니더라도 적을 만들지 마라 / 류츠신
        </div>
      </div>
    </div>
  );
};
export default ReviewComponents;

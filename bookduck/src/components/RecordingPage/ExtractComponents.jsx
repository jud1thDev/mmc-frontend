import { useNavigate } from "react-router-dom";

const ExtractComponents = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/extract-archive-detail")}
      className="cursor-pointer"
    >
      <div className="flex flex-col gap-[1.25rem] w-[22.5625rem]  p-[1.25rem] rounded-[0.875rem] bg-gray-10 shadow-custom">
        <div className="text-right text-b2 text-gray-400">54p</div>
        <div className="flex flex-col gap-[0.5rem]">
          <div className="text-b2 text-gray-800">
            한번 피면 끝장을 보게 되는 책이다.
          </div>
          <div className="text-c2 text-gray-400">
            내 편이 아니더라도 적을 만들지 마라 / 류츠신
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExtractComponents;

import { useNavigate } from "react-router-dom";

const ExtractCard = ({
  onClick,
  selected,
  content,
  visibility,
  pageNumber,
  title,
  author,
}) => {
  const navigate = useNavigate();

  return (
    <div className="cursor-pointer h-[8rem]" onClick={onClick}>
      <div
        className={`flex flex-col gap-[1.25rem] rounded-[0.875rem] bg-gray-10 shadow-custom p-5
          ${selected && " border-[1px] border-[#6B7FF0]"}`}
      >
        <div className="text-right text-b2 text-gray-400">
          {pageNumber || "페이지"}p
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <div className="text-b2 text-gray-800">
            {content || "발췌 카드를 선택해주세요"}
          </div>
          <div className="text-c2 text-gray-400">
            {title || "제목"} / {author || "작가"}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExtractCard;

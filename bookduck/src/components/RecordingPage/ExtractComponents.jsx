import { useNavigate } from "react-router-dom";

const ExtractComponents = ({ page, content, title, author }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/extract-archive-detail")}
      className="cursor-pointer"
    >
      <div className="flex flex-col gap-[1.25rem] w-[22.5625rem]  p-[1.25rem] rounded-[0.875rem] bg-gray-10 shadow-custom">
        <div className="text-right text-b2 text-gray-400">{page}p</div>
        <div className="flex flex-col gap-[0.5rem]">
          <div className="text-b2 text-gray-800">{content} </div>
          <div className="text-c2 text-gray-400">
            {title} / {author}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExtractComponents;

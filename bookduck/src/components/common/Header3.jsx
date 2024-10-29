import { useNavigate } from "react-router-dom";
import header_arrow from "../../assets/common/header-arrow.svg";

//check = true면 취소 / 완료 버튼 표시

const Header3 = ({ title = "제목" }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="flex items-center w-full h-[2.75rem]">
      <div className="ml-[1rem] cursor-pointer" onClick={handleBackClick}>
        <img src={header_arrow} alt="arrow" />
      </div>
      {check && (
        <div className="flex gap-6">
          <div className="text-b1 text-gray-400 cursor-pointer">취소</div>
          <div className="text-b1 text-blue-400 cursor-pointer">완료</div>
        </div>
      )}
    </div>
  );
};
export default Header3;

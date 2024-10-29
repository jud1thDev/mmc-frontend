import header_arrow from "../../assets/common/header-arrow.svg";

//check = true면 취소 / 완료 버튼 표시

const Header3 = ({ title = "제목", check = false, handleBack }) => {
  return (
    <div className="flex justify-between items-center h-[2.75rem] mx-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <img onClick={handleBack} src={header_arrow} alt="arrow" />
        </div>
        <div className="text-st ml-[1.26rem] font-semibold">{title}</div>
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

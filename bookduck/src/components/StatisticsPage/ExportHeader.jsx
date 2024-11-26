import { useNavigate } from "react-router-dom";
import cancleIcon from "../../assets/statisticsPage/cancle.svg";
//check = true면 취소 / 완료 버튼 표시
//edit은 "편집" 텍스트 띄울지 여부
//editState는 편집 텍스트를 클릭했는지 여부 (편집 버튼 클릭했으면 true)
const ExportHeader = ({
  title = "제목",
  check = false,
  edit = false,
  editState = false,
  handleEdit,
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="flex justify-between items-center px-4 py-1 h-[2.75rem]">
      <div className="text-st font-semibold">{title}</div>
      <img
        className="w-6 h-6 p-1.5 cursor-pointer"
        src={cancleIcon}
        onClick={handleBackClick}
      />
    </div>
  );
};
export default ExportHeader;

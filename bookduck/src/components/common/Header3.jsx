import { useNavigate } from "react-router-dom";
import header_arrow from "../../assets/common/header-arrow.svg";

import setting from "../../assets/common/setting.svg";
import alarm from "../../assets/common/alarm.svg";

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
      <div className="text-st ml-[1.26rem] font-semibold">{title}</div>
    </div>
  );
};
export default Header3;

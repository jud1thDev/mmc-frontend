import arrow from "../../assets/common/header-arrow.svg";
import setting from "../../assets/common/setting.svg";
import alarm from "../../assets/common/alarm.svg";

const Header3 = ({ title = "제목" }) => {
  return (
    <div className="flex items-center w-full h-[2.75rem]">
      <div className="ml-4">
        <img src={arrow} alt="arrow" />
      </div>
      <div className="text-st ml-[1.26rem] font-semibold">{title}</div>
    </div>
  );
};
export default Header3;

// 오리 발자국과 제목 있는 버전 (bottom border도 있음)

import star from "../../assets/statisticsPage/star.svg";
const StatisticsHeader = ({ title }) => {
  return (
    <div className="flex items-center px-5 gap-2.5 text-st font-semibold w-[24.5625rem] h-[3.125rem] border-b border-gray-100">
      <img src={star} />
      {title}
    </div>
  );
};
export default StatisticsHeader;

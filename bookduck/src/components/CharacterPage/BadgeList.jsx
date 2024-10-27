// import back from "../../assets/common/back.svg";
import Badge from "./Badge";
//title을 props로 받음. default 값은 "제목"
const BadgeList = ({ title = "제목" }) => {
  return (
    <div className="flex flex-col px-5 pt-4 pb-5 gap-5 bg-gray-25 w-[361px] border border-solid border-gray-100 rounded-[12px]">
      <div className="text-b1 font-semibold ">{title}</div>
      <div className="flex justify-between px-2 w-[321px]">
        <Badge />
        <Badge />
        <Badge />
        <Badge />
      </div>
    </div>
  );
};
export default BadgeList;

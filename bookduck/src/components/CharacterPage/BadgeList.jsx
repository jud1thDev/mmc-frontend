// import back from "../../assets/common/back.svg";
import Badge from "./Badge";
//title을 props로 받음. default 값은 "제목"
const BadgeList = ({ title = "제목", badgeData }) => {
  console.log(title, badgeData);

  const firstRow = badgeData?.slice(0, 4);
  const secondRow = badgeData?.slice(4);
  return (
    <div className="flex flex-col px-5 pt-4 pb-5 gap-5 bg-gray-25 w-[22.5625rem] border border-solid border-gray-100 rounded-xl">
      <div className="text-b1 font-semibold ">{title}</div>
      <div className="flex px-2 justify-between">
        {firstRow.map((badge, index) => (
          <Badge badgeInfo={badge} key={index} />
        ))}
      </div>
      {firstRow[3].isOwned && (
        <div className="flex px-2 justify-between">
          {secondRow.map((badge, index) => (
            <Badge badgeInfo={badge} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
export default BadgeList;

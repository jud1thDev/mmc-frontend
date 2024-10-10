import back from "../../assets/common/back.svg";
//title을 props로 받음. default 값은 "제목"
//편집 가능한 header라면 edit 값이 true
const Header1 = ({ title = "제목", edit }) => {
  return (
    <div className="flex justify-between items-center w-[393px] h-[52px]">
      <button className="w-[36px] h-[36px]">
        <img src={back} alt="backIcon" />
      </button>
      <div className="text-st font-semibold">{title}</div>
      <div
        className={`flex items-center w-[36px] h-[36px] text-b1 text-gray-400 underline underline-offset-4 ${
          edit ? "cursor-pointer" : ""
        }`}
      >
        {edit && "편집"}
      </div>
    </div>
  );
};
export default Header1;

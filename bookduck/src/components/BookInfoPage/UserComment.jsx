import starNo from "../../assets/bookinfoPage/star-small-no.svg";
const UserComment = () => {
  return (
    <div className="flex flex-col px-4 py-3 gap-3 text-b2 w-[24.5625rem]">
      <div className="flex justify-between items-center text-btn4 underline text-gray-500">
        <div className="flex gap-0.5">
          <img src={starNo} />
          <img src={starNo} />
          <img src={starNo} />
          <img src={starNo} />
          <img src={starNo} />
        </div>
        <span className="cursor-pointer">유저 닉네임</span>
      </div>
      타유저가 작성한 한줄평이 들어갈 자리입니다.
    </div>
  );
};
export default UserComment;

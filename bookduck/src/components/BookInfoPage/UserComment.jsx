import starNo from "../../assets/bookinfoPage/star-small-no.svg";
import starYes from "../../assets/bookinfoPage/star-small-yes.svg";
import heartNo from "../../assets/bookinfoPage/heart-no.svg";
import heartYes from "../../assets/bookinfoPage/heart-yes.svg";
const UserComment = () => {
  return (
    <div className="flex flex-col p-4 gap-1.5 text-b2 w-[24.5625rem]">
      <div className="flex flex-col gap-3">
        <div className="flex gap-0.5">
          <img src={starNo} />
          <img src={starNo} />
          <img src={starNo} />
          <img src={starNo} />
          <img src={starNo} />
        </div>
        타유저가 작성한 한줄평이 들어갈 자리입니다.
      </div>
      <div className="flex justify-between items-center text-btn4 text-gray-500">
        <div className="flex gap-2.5">
          <span className=" underline cursor-pointer">유저 닉네임</span>
          <span>2024.10.27</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={heartNo} />
          <span className="text-right text-btn4 text-gray-800 w-5">10</span>
        </div>
      </div>
    </div>
  );
};
export default UserComment;

import starNo from "../../assets/bookinfoPage/star-small-no.svg";
import starYes from "../../assets/bookinfoPage/star-small-yes.svg";
import starHalf from "../../assets/bookinfoPage/star-small-half.svg";
import heartNo from "../../assets/bookinfoPage/heart-no.svg";
import heartYes from "../../assets/bookinfoPage/heart-yes.svg";
const UserComment = ({ data }) => {
  //날짜 포맷하기
  const formattedDate = data?.createdTime.split("T")[0].replace(/-/g, ".");
  return (
    <div className="flex flex-col p-4 gap-1.5 text-b2 w-[24.5625rem]">
      <div className="flex flex-col gap-3">
        <div className="flex gap-0.5">
          {/* <img src={starNo} />
          <img src={starNo} />
          <img src={starNo} />
          <img src={starNo} />
          <img src={starNo} /> */}
          {Array.from({ length: 5 }, (_, index) => {
            let starSrc = starNo;
            if (data?.rating > index) {
              starSrc = data?.rating >= index + 1 ? starYes : starHalf;
            }
            return <img key={index} src={starSrc} alt="star" />;
          })}
        </div>
        {data?.oneLineContent}
      </div>
      <div className="flex justify-between items-center text-btn4 text-gray-500">
        <div className="flex gap-2.5">
          <span className=" underline cursor-pointer">
            {data?.userNickName}
          </span>
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={heartNo} />
          <span className="text-right text-btn4 text-gray-800 w-5">
            {data?.oneLineLikes}
          </span>
        </div>
      </div>
    </div>
  );
};
export default UserComment;

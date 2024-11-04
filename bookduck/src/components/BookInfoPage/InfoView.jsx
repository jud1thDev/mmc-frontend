import { useNavigate } from "react-router-dom";
import right from "../../assets/common/right.svg";
import BookPlot from "./BookPlot";
import Divider1 from "../common/Divider1";
import Divider2 from "../common/Divider2";
import UserComment from "./UserComment";

const InfoView = () => {
  const navigate = useNavigate();
  const handleCommentClick = () => {
    navigate("/info/book/comment");
  };
  return (
    <div className="flex flex-col gap-5">
      <BookPlot />
      <Divider1 />
      <div className="flex flex-col items-center gap-1">
        <div className="flex px-4 text-b1 font-semibold justify-between items-center w-full">
          다른 사용자들의 한줄평
          <img
            className="cursor-pointer"
            src={right}
            onClick={handleCommentClick}
          />
        </div>
        <UserComment />
        <Divider2 />
        <UserComment />
        <Divider2 />
        <UserComment />
        <Divider2 />
      </div>
    </div>
  );
};
export default InfoView;

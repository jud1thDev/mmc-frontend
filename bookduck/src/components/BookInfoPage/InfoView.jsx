import { useNavigate } from "react-router-dom";
import right from "../../assets/common/right.svg";
import cover from "../../assets/bookinfoPage/cover.svg";
import BookPlot from "./BookPlot";
import Divider1 from "../common/Divider1";
import Divider2 from "../common/Divider2";
import UserComment from "./UserComment";

const InfoView = ({ bookData, ratingData }) => {
  const images = [cover, cover, cover, cover, cover, cover, cover];
  const ratingList = ratingData?.oneLineRatingList || [];
  const navigate = useNavigate();
  const handleCommentClick = () => {
    navigate("/info/book/comment", { state: { ratingList } });
  };
  return (
    <div className="flex flex-col pb-[8rem] gap-5">
      <BookPlot bookData={bookData} />
      <Divider1 />
      <div className="flex flex-col items-center gap-1">
        <div className="flex px-4 text-b1 font-semibold justify-between items-center w-full">
          한줄평 ({ratingList?.length})
          <img
            className="cursor-pointer"
            src={right}
            onClick={handleCommentClick}
          />
        </div>
        {ratingList.map((oneLine, index) => (
          <div className="flex flex-col items-center">
            <UserComment data={oneLine} key={index} />
            <Divider2 />
          </div>
        ))}
      </div>
      <Divider1 />
      <div className="flex flex-col px-4 gap-6 text-b1 font-semibold">
        이 책을 읽은 사용자들이 읽은 다른 책
        <div className="flex gap-2 overflow-scroll">
          {images.map((cover, index) => (
            <img
              key={index}
              className="w-[76px] h-[112px] rounded-[0.25rem]"
              src={cover}
              alt={`book-cover-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default InfoView;

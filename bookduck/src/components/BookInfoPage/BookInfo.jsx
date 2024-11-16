import cover from "../../assets/bookinfoPage/cover.svg";
import down from "../../assets/common/down-arrow.svg";

const BookInfo = ({ isMe = "default", bookData }) => {
  const bookDetailData = bookData.bookInfoDetailDto;
  // 기본으로 등록되어 있는 책: default 내가 직접 등록한 책: me 타유저가 직접 등록한 책: other
  return (
    <div className="flex gap-4 w-[22.5625rem]">
      <img
        className="w-[7rem] h-[9.75rem] rounded bg-cover bg-no-repeat shadow-custom"
        src={cover}
        alt="Cover"
      />
      <div className="flex flex-col py-2 w-full h-[10.25rem]">
        <div className="flex flex-col gap-1">
          <div className="text-t2 font-semibold max-h-[3.5rem]">책 제목</div>
          <div className="text-b1 h-6">{bookDetailData?.publisher}</div>
        </div>
        <div className="flex flex-col mt-1 justify-between h-full">
          {isMe === "other" ? (
            <div className="text-b2 text-orange-400">
              유저닉네임님이 등록한 책
            </div>
          ) : (
            <div className="flex flex-col justify-between h-full">
              {isMe === "default" ? (
                <div className="flex items-center gap-1 text-b2 text-gray-500">
                  <div>기본평점</div>
                  <div>{bookData?.ratingAverage}</div>
                </div>
              ) : (
                <div className="text-b2 text-orange-400">내가 등록한 책</div>
              )}

              <div className="flex py-1.5 text-b2 text-gray-500 ">
                읽고 싶어요
                <img src={down} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default BookInfo;
